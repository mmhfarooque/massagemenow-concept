import Link from 'next/link';
export default function NotFound() {
  return <section className="page-head"><div className="wrap"><h1>This page isn’t here</h1><p className="lede-sm">The link may be old. Try the <Link href="/">home page</Link> or the list of <Link href="/#massages">massages</Link>.</p></div></section>;
}
