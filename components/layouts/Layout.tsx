import Head from 'next/head';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Social from '@/components/Social';
import Email from '@/components/Email';
import Footer from '@/components/Footer';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';

const { colors, fontSizes, fonts } = theme;

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:hover {
    background-color: ${colors.darkGrey};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.primary};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [githubInfo, setGithubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/christhoval06/christhoval06')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location?.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
  }, [isLoading]);

  return (
    <div id='root'>
      {/* <Head metadata={site.siteMetadata} /> */}

      <GlobalStyle />

      <SkipToContent href='#content'>Skip to Content</SkipToContent>

      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className='container'>
          <Nav />
          <Social />
          <Email />
          {children}
          <Footer githubInfo={githubInfo} />
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequired,
};

export default Layout;
