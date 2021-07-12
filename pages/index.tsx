import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '@/layouts/Layout';
import Main from '@/styles/Main';
import mixins from '@/styles/mixins';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Jobs from '@/components/Jobs';
import Featured from '@/components/Featured';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

// https://github.com/AnKiTKaMbOj18/ankitkamboj18.github.io-orig/blob/master/src/components/layout.js
// https://medium.com/@sourleangchhean/getting-start-with-next-js-framework-for-server-rendered-react-apps-ab62b02461d0
export default function IndexPage({ location, data }) {
  return (
    <Layout location={location}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='http://fonts.cdnfonts.com/css/calibre' rel='stylesheet' />
        <link href='http://fonts.cdnfonts.com/css/sf-mono' rel='stylesheet' />
      </Head>

      <MainContainer id='content'>
        <Hero
          title='Hi, my name is'
          name='Christhoval Barba.'
          subtitle='I build things for the web.'
          html="<p> I'm a software engineer based in Panama, specializing in building (and occasionally designing) exceptional, high-quality websites, backend and applications.</p>"
        />
        <About
          title='About Me'
          avatar='https://im.ankitkamboj.in/static/ea042474c8a91d8ab93ecd5cf0d5426a/53aff/my.png'
          skills={['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'Express', 'GraphQL', 'NativeScript']}
          html=" <p> Hello! I'm Ankit, a software engineer based in Gurugram, India who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. </p><p> Shortly after graduating from <a href=''>Kurukshetra University</a>, I joined the engineering team at <a href=''>Vernuso</a>{' '}where I work on a wide variety of interesting and meaningful projects on a daily basis. </p><p>Here are a few technologies I've been working with recently:</p>"
        />
        <Jobs
          data={[
            {
              title: 'Software Engineer',
              range: 'September 2018 - Present',
              url: 'https://www.bedbathandbeyond.com/',
              company: 'BedBathAndBeyond',
              html:
                "<ul><li>Developed and shipped highly interactive features and enhancements by creating many reusable components following best practices.</li><li>Worked on Bedbath's frontend built from scratch in React, it was highly challenging and important project.</li><li>Worked on various technologies across projects i.e ReactJS, Redux, Saga Middleware, ImmutableJS,Html, Css, Javascript, Node , Express , Service workers, Analytics.</li><li>Developed and contributed on multiple projects in BBBY, i.e BBBY frontent in React , Implementation of Analytics using Tealium and Google Analytics , Site Optimization (Performance improvement).</li></ul>",
            },
            {
              title: 'Software Developer',
              range: 'September 2017 - September 2018',
              url: '<a href="https://www.linkedin.com/company/vernuso" target="_blank" rel="nofollow noopener noreferrer">Vernuso</a>',
              company: 'Vernuso',
              html:
                '<ul><li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li><li>Worked technologies including Javascript , CSS , HTML , Angular , Java, Spring , Microservices , SQl , MySQL , Postgresql , Drools , Activiti Manager and more.</li><li>Developed and maintained confiad compliance platform application build in Java spring with frontend on Angular, application used to provide compliance and risk management platform for clients.</li><li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li><li>Developed data backup application for clients from database and store in zip folder at specified location, used java , spring , thymelyf , postgresql queries. It was an internal application for Vernuso and its clients.</li></ul>',
            },
            {
              title: 'Intern Web Developer',
              range: 'February 2017 - August 2017',
              url: 'https://www.bindarydata.in/',
              company: 'Binary Data',
              html:
                '<ul><li>Developed and shipped highly interactive web applications</li><li>Built and shipped the Wordpress plugins and web applications as per clients and projects.</li><li>Worked on PHP , Wordpress , Codeigniter , Javascript , CSS , HTML and Servers across projects.</li><li>Contributed to projects like school Website on PHP, Wordpress customizations , creating custom plugins , Cutomizing themes and many other tools and technologies.</li></ul>',
            },
            {
              title: 'Software Engineer',
              range: 'September 2018 - Present',
              url: 'https://www.bedbathandbeyond.com/',
              company: 'BedBathAndBeyond',
              html:
                "<ul><li>Developed and shipped highly interactive features and enhancements by creating many reusable components following best practices.</li><li>Worked on Bedbath's frontend built from scratch in React, it was highly challenging and important project.</li><li>Worked on various technologies across projects i.e ReactJS, Redux, Saga Middleware, ImmutableJS,Html, Css, Javascript, Node , Express , Service workers, Analytics.</li><li>Developed and contributed on multiple projects in BBBY, i.e BBBY frontent in React , Implementation of Analytics using Tealium and Google Analytics , Site Optimization (Performance improvement).</li></ul>",
            },
            {
              title: 'Software Developer',
              range: 'September 2017 - September 2018',
              url: '<a href="https://www.linkedin.com/company/vernuso" target="_blank" rel="nofollow noopener noreferrer">Vernuso</a>',
              company: 'Vernuso',
              html:
                '<ul><li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li><li>Worked technologies including Javascript , CSS , HTML , Angular , Java, Spring , Microservices , SQl , MySQL , Postgresql , Drools , Activiti Manager and more.</li><li>Developed and maintained confiad compliance platform application build in Java spring with frontend on Angular, application used to provide compliance and risk management platform for clients.</li><li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</li><li>Developed data backup application for clients from database and store in zip folder at specified location, used java , spring , thymelyf , postgresql queries. It was an internal application for Vernuso and its clients.</li></ul>',
            },
            {
              title: 'Intern Web Developer',
              range: 'February 2017 - August 2017',
              url: 'https://www.bindarydata.in/',
              company: 'Binary Data',
              html:
                '<ul><li>Developed and shipped highly interactive web applications</li><li>Built and shipped the Wordpress plugins and web applications as per clients and projects.</li><li>Worked on PHP , Wordpress , Codeigniter , Javascript , CSS , HTML and Servers across projects.</li><li>Contributed to projects like school Website on PHP, Wordpress customizations , creating custom plugins , Cutomizing themes and many other tools and technologies.</li></ul>',
            },
          ]}
        />
        <Featured
          data={[
            {
              title: 'Tech Blogs Website',
              cover: 'https://im.ankitkamboj.in/static/cea43ba786fc2ba079343735e6f1caa3/e8606/blog-website.png',
              html:
                '<p>A web app blog website by Ankit Kamboj powered by progressive web app, Read the latest technical articals related to any technology. Users can get great articals to read with specified time for articles.</p>',
              tech: ['React', 'Node.js', 'Express', 'Gatsby', 'Javascript'],
              external: 'https://ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
            {
              title: 'Ankit Kamboj Portfolio',
              cover: 'https://im.ankitkamboj.in/static/14278503bcf053f14be5381718e5dc00/e8606/ankit-port.png',
              html:
                '<p>A web app my portfolio website. This is my professional carrer portfolio having all details. Build in using React, Gatsby, Graphql, Javascript and more.</p>',
              tech: ['React', 'Gatsby', 'Javascript', 'Graphql'],
              external: 'https://ankitkamboj18.github.io/',
              github: 'https://github.com/AnKiTKaMbOj18/ankitkamboj18.github.io',
            },
            {
              title: '1 Line Of Code',
              cover: 'https://im.ankitkamboj.in/static/8b160dd3dcecbc9f918e63634e97e97b/e8606/1linecode.png',
              html:
                '<p>A web app for Javascript to provide all utilities in 1 line of code. Best for anyone to understand what specific functionality does and use as per requirement.</p>',
              tech: ['React', 'Node.js', 'Express', 'Typescript'],
              external: 'https://1lineofcode.ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
            {
              title: 'Car Deals PWA',
              cover: 'https://im.ankitkamboj.in/static/28a388fd11eaf75df7a73e263002c61a/e8606/car-deals.png',
              html:
                '<p>A web app driven by offline support using service workers and powered by Progressive web app. All car deals available on product listing page and product details page.</p>',
              tech: ['Javascript', 'PHP', 'Service workers', 'Progressive web app'],
              external: 'https://cd-pwa.ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
          ]}
        />
        <Projects
          data={[
            {
              title: 'Tech Blogs Website',
              html:
                '<p>A web app blog website by Ankit Kamboj powered by progressive web app, Read the latest technical articals related to any technology. Users can get great articals to read with specified time for articles.</p>',
              tech: ['React', 'Node.js', 'Express', 'Gatsby', 'Javascript'],
              external: 'https://ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
            {
              title: 'Ankit Kamboj Portfolio',
              html:
                '<p>A web app my portfolio website. This is my professional carrer portfolio having all details. Build in using React, Gatsby, Graphql, Javascript and more.</p>',
              tech: ['React', 'Gatsby', 'Javascript', 'Graphql'],
              external: 'https://ankitkamboj18.github.io/',
              github: 'https://github.com/AnKiTKaMbOj18/ankitkamboj18.github.io',
            },
            {
              title: '1 Line Of Code',
              html:
                '<p>A web app for Javascript to provide all utilities in 1 line of code. Best for anyone to understand what specific functionality does and use as per requirement.</p>',
              tech: ['React', 'Node.js', 'Express', 'Typescript'],
              external: 'https://1lineofcode.ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
            {
              title: 'Car Deals PWA',
              html:
                '<p>A web app driven by offline support using service workers and powered by Progressive web app. All car deals available on product listing page and product details page.</p>',
              tech: ['Javascript', 'PHP', 'Service workers', 'Progressive web app'],
              external: 'https://cd-pwa.ankitkamboj.in/',
              github: 'https://github.com/ankitkamboj18/',
            },
          ]}
        />
        <Contact
          title='Get In Touch'
          html="<p> Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email! </p>"
        />
      </MainContainer>
    </Layout>
  );
}

IndexPage.propTypes = {};
