import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import gsap from 'gsap';
import styled from 'styled-components';

import IconAfro from '@/components/icons/afro';
import mixins from '@/styles/mixins';
import theme from '@/styles/theme';
const { colors } = theme;

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

type LogoWrapperProps = { isMounted: boolean };

const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${(props: LogoWrapperProps) => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #A {
      opacity: 0;
    }
  }
`;

const Span = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #64ffda;
  font-size: 50px;
  transform: translate(-50%, -50%);
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    // const tl = gsap
    //   .timeline({
    //     repeat: 1,
    //     repeatDelay: 1,
    //     onComplete: () => {
    //       console.log('onComplete');
    //       finishLoading();
    //     },
    //     defaults: { ease: 'power2.inOut' },
    //   })
    //   .from('#logo path', { delay: 100, duration: 2000, 'stroke-dashoffset': 0, 'fill-opacity': 1 })
    //   .from('#logo #A', { duration: 2000, opacity: 1 })
    //   .from('#logo', { delay: 700, duration: 300, opacity: 0, scale: 0.1 })
    //   .from('.loader', { duration: 200, opacity: 0, zIndex: -1 });
    anime
      .timeline({
        complete: () => finishLoading(),
      })
      .add({
        targets: '#logo path',
        delay: 500,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #A',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer className='loader'>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <LogoWrapper isMounted={isMounted}>
        <IconAfro />
        {/* <Span>C</Span> */}
      </LogoWrapper>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
