import reviews from './reviews.json';

export { reviews };

export const BOOK_URL = 'https://book.heygoldie.com/In-House-Massage/checkout';
export const SOCIAL = {
  facebook: 'https://www.facebook.com/MassageMeNowApp',
  instagram: 'https://www.instagram.com/massagemenowapp/',
  chris: 'https://www.facebook.com/chris.pannan',
};
export const PHONE = '+61407448644';
export const PHONE_LABEL = '0407 448 644';
export const EMAIL = 'cjpannan@gmail.com';
export const AREAS = ['Airlie Beach', 'Cannonvale', 'Proserpine', 'Whitsunday Islands', 'Hamilton Island', 'Yachts & marinas'];

// Real places the table has been set up, each backed by a client review.
export const places = [
  { place: 'The back of a boat at the marina', quote: 'Chris came to the marina, set up on the back of our boat, and gave me an incredible two-hour massage.', name: 'My Herd' },
  { place: 'A hotel balcony with a view', quote: 'I had the pleasure of being massaged on my hotel room balcony with a beautiful view.', name: 'Shayuri Deepak' },
  { place: 'An Airbnb, for a hens party of six', quote: 'He happily came to our airbnb and massaged our group of 6.', name: 'Catherine Hardingham' },
  { place: 'Mirage Whitsundays', quote: 'Me and my partner had a full body massage done at Mirage Whitsundays and omg it was the best ever!', name: 'Ebonie Button' },
  { place: 'Marina Shores, the same day', quote: 'Even got to us the same day as I called.', name: 'Chris Thompson' },
  { place: 'A hotel room, before sailing to China', quote: 'I made it to China with no back pain throughout the voyage.', name: 'Antony Strong' },
];

export const massages = [
  {
    slug: 'airlie-beach-remedial-massage',
    name: 'Remedial massage',
    short: 'Targeted work on lower back pain, sciatica, headaches and sports injuries.',
    img: '/img/remedial.webp',
    intro: [
      'Remedial massage goes after a specific problem rather than the whole body. It is the right choice for lower back pain, sciatica, headaches and the knots that a long flight or a week on a boat leaves behind.',
      'Chris is a qualified remedial sports practitioner. Most sessions start with a few questions and a look at your posture, so the time goes where it is needed.',
    ],
    what: 'Trigger point therapy and release techniques that loosen tight muscles, improve circulation and help the body recover.',
    goodFor: ['Lower back pain and sciatica', 'Tension headaches', 'Sports injuries and recovery', 'Neck and shoulders after travel'],
  },
  {
    slug: 'airlie-beach-deep-tissue-massage',
    name: 'Deep tissue massage',
    short: 'Slow, firm pressure into the deeper layers of muscle for chronic tension.',
    img: '/img/deep-tissue.webp',
    intro: [
      'Deep tissue massage works the deeper layers of muscle and connective tissue with slow, deliberate strokes and firm pressure.',
      'It suits people who carry chronic tension, stiffness or postural pain, and anyone who finds a relaxation massage too light.',
    ],
    what: 'Deep pressure that breaks down adhesions, eases chronic pain and improves mobility. It can help with back pain, neck pain and sciatica.',
    goodFor: ['Chronic muscle tension', 'Stiffness and limited movement', 'Postural pain from desk work', 'People who like firm pressure'],
  },
  {
    slug: 'airlie-beach-full-body-massage',
    name: 'Full body massage',
    short: 'Head to toe, with real time spent on the scalp and feet.',
    img: '/img/full-body.webp',
    intro: [
      'A full body massage covers every major muscle group: back, shoulders, neck, arms, legs, feet and head.',
      'The team are known for the scalp and foot work, so this is the one to book if you want to switch off completely.',
    ],
    what: 'Relaxation-focused massage that eases tension across the whole body and improves circulation.',
    goodFor: ['Switching off on holiday', 'General stress and tiredness', 'People who love a head and foot massage', 'A first massage'],
  },
  {
    slug: 'airlie-beach-couples-massage',
    name: 'Couples massage',
    short: 'Two therapists, side by side, in your room. Good for anniversaries and honeymoons.',
    img: '/img/couples.webp',
    intro: [
      'Two tables, two therapists, set up side by side wherever you are staying.',
      'Couples book it for honeymoons, anniversaries and birthdays. Groups book it for hens weekends, and for the day the weather cancels the boat trip.',
    ],
    what: 'Two massages at the same time, each with its own therapist, so you can each choose the style and pressure you want.',
    goodFor: ['Honeymoons and anniversaries', 'Birthday surprises', 'Hens and group bookings', 'Rainy days in the room'],
  },
  {
    slug: 'airlie-beach-hot-stone-massage',
    name: 'Hot stone massage',
    short: 'Smooth heated stones that let the warmth sink deep into tight muscles.',
    img: '/img/hot-stone.webp',
    intro: [
      'Smooth heated stones are placed on key points of the body and used as part of the massage strokes, so the warmth reaches deep into the muscle.',
      'Heat relaxes muscle faster than hands alone, which makes this a good choice for stiffness, stress and poor sleep.',
    ],
    what: 'Heat plus massage for deep relaxation, muscle tension relief and better circulation.',
    goodFor: ['Stiffness and chronic tightness', 'Stress and poor sleep', 'Cooler evenings', 'A slower, deeper relaxation'],
  },
  {
    slug: 'airlie-beach-reiki-massage',
    name: 'Reiki massage',
    short: 'Gentle massage combined with Reiki energy work for a calm, quiet reset.',
    img: '/img/reiki.webp',
    intro: [
      'Reiki massage blends gentle massage with the laying on of hands used in Reiki practice.',
      'It is quiet and non-invasive, and suits people looking for calm and stress relief more than deep muscle work.',
    ],
    what: 'Light-touch treatment aimed at relaxation, stress reduction and a sense of balance, with relief for sore muscles.',
    goodFor: ['Stress and mental fatigue', 'People who prefer gentle pressure', 'Winding down after a busy trip', 'Combining with a relaxation massage'],
  },
  {
    slug: 'airlie-beach-massage',
    name: 'Airlie Beach massage',
    short: 'Classic Swedish-style massage to unwind, wherever you are staying.',
    img: '/img/sunset.webp',
    intro: [
      'A classic relaxation massage, delivered at your hotel, Airbnb, holiday house or boat anywhere around Airlie Beach and the Whitsundays.',
      'The team has been servicing Airlie Beach accommodation seven days a week for close to 17 years.',
    ],
    what: 'Soothing Swedish-style strokes with soft tissue work where you need it, at the pressure you choose.',
    goodFor: ['Holidaymakers who want to unwind', 'Locals who would rather stay home', 'Muscle tension and stress', 'A treat after a big day on the water'],
  },
];

export const alsoOffered = ['Sports massage', 'Pregnancy and fertility massage', 'Post-surgery massage', 'Weight loss massage'];
