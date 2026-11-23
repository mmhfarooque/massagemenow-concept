'use client';
import { useEffect, useRef } from 'react';

// Interactive water-ripple hero: CPU wave simulation -> normal map -> WebGL refraction of the photo.
const VS = `attribute vec2 p; varying vec2 v; void main(){ v = p * .5 + .5; v.y = 1. - v.y; gl_Position = vec4(p, 0., 1.); }`;
const FS = `precision mediump float;
varying vec2 v;
uniform sampler2D img; uniform sampler2D wave;
uniform vec2 res; uniform vec2 isz; uniform vec2 pos;
void main(){
  vec4 w = texture2D(wave, v);
  vec2 n = (w.rg - .5) * 2.;
  vec2 uv = v + n * .035;
  float ra = res.x / res.y, ia = isz.x / isz.y;
  vec2 s = ra > ia ? vec2(1., ia / ra) : vec2(ra / ia, 1.);
  vec2 iuv = uv * s + (1. - s) * pos;
  vec3 c = texture2D(img, iuv).rgb;
  vec3 N = normalize(vec3(-n * 2.2, 1.));
  float spec = pow(max(dot(N, normalize(vec3(-.4, -.6, .7))), 0.), 40.);
  c += spec * .55 + (n.x + n.y) * .06;
  gl_FragColor = vec4(c, 1.);
}`;

export default function HeroWater({ src, pos = [0.62, 0.4] }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) return;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = n => gl.getUniformLocation(pr, n);
    const tex = (unit) => { const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); return t; };
    const imgTex = tex(0), waveTex = tex(1);
    gl.uniform1i(U('img'), 0); gl.uniform1i(U('wave'), 1); gl.uniform2f(U('pos'), pos[0], pos[1]);

    const W = 200; let H = 120, a, b, rgba;
    const alloc = () => { a = new Float32Array(W * H); b = new Float32Array(W * H); rgba = new Uint8Array(W * H * 4); };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(U('res'), canvas.width, canvas.height);
      const nh = Math.max(60, Math.round(W * r.height / r.width)); if (nh !== H || !a) { H = nh; alloc(); }
    };
    alloc(); resize();

    const drop = (x, y, r, s) => {
      const cx = Math.round(x * W), cy = Math.round(y * H);
      for (let j = -r; j <= r; j++) for (let i = -r; i <= r; i++) {
        const X = cx + i, Y = cy + j, d = i * i + j * j;
        if (X > 0 && Y > 0 && X < W - 1 && Y < H - 1 && d <= r * r) a[Y * W + X] += s * (1 - d / (r * r + 1));
      }
    };
    const host = canvas.parentElement;
    let last = 0;
    const onMove = e => {
      const r = host.getBoundingClientRect(); const now = performance.now();
      if (now - last < 16) return; last = now;
      drop((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, 3, 1.6);
    };
    const onDown = e => { const r = host.getBoundingClientRect(); drop((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, 6, 6); };
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('resize', resize);

    let raf = 0, visible = true, ready = false, t = 0;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && ready) loop(); }, { threshold: 0 });
    io.observe(host);

    const step = () => {
      for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
        const i = y * W + x;
        b[i] = ((a[i - 1] + a[i + 1] + a[i - W] + a[i + W]) * .5 - b[i]) * .975;
      }
      const tmp = a; a = b; b = tmp;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const i = y * W + x, k = i * 4;
        const dx = (x > 0 && x < W - 1) ? a[i + 1] - a[i - 1] : 0;
        const dy = (y > 0 && y < H - 1) ? a[i + W] - a[i - W] : 0;
        rgba[k] = Math.max(0, Math.min(255, 128 + dx * 60)); rgba[k + 1] = Math.max(0, Math.min(255, 128 + dy * 60)); rgba[k + 3] = 255;
      }
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, waveTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, rgba);
    };
    const loop = () => {
      cancelAnimationFrame(raf);
      const f = () => {
        if (!visible) return;
        t++;
        if (t % 38 === 0) drop(Math.random(), .35 + Math.random() * .6, 2, 2.2); // ambient rain
        step(); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); raf = requestAnimationFrame(f);
      };
      f();
    };

    const im = new Image(); im.src = src;
    im.onload = () => {
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, imgTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
      gl.uniform2f(U('isz'), im.naturalWidth, im.naturalHeight);
      ready = true; host.classList.add('water-on');
      // opening splash
      setTimeout(() => drop(.68, .55, 7, 9), 400);
      loop();
    };
    return () => { cancelAnimationFrame(raf); io.disconnect(); host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerdown', onDown); window.removeEventListener('resize', resize); };
  }, [src]);
  return <canvas ref={ref} className="water" aria-hidden="true" />;
}
