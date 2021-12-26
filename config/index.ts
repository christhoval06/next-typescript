export default {
  siteTitle: 'Ankit Kamboj | Software Engineer',
  siteDescription:
    'Ankit Kamboj is a software engineer based in Gurugram,India  who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Ankit Kamboj, Ankit, kamboj, ankitkamboj18, software engineer, front-end engineer, web developer, javascript, Gurugram , yamunanagar , haryana ',
  siteUrl: 'https://im.ankitkamboj.in',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ankit Kamboj',
  location: 'Gurgaon, India',
  email: 'christhoval06@gmail.com',
  github: 'https://github.com/ankitkamboj18',
  twitterHandle: '@imAnkitkamboj18',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ankitkamboj18',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ankitkamboj18',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ankitkamboj18',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ankitkamboj18',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/imAnkitKamboj18',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
      to: 'about',
    },

    {
      name: 'Experience',
      url: '/#jobs',
      to: 'jobs',
    },
    {
      name: 'Work',
      url: '/#featured',
      to: 'featured',
    },
    {
      name: 'Projects',
      url: '/#projects',
      to: 'projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
      to: 'contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
