import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { throttle } from '@/utils/throttle';
import config from '@/config';
import Menu from '@/components/Menu';
import IconAfro from '@/components/icons/afro';
import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

const { colors, fontSizes, fonts } = theme;
const { navLinks, navHeight } = config;

interface NavContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollDirection: 'none' | 'up' | 'down';
}

const NavContainer = styled.header<NavContainerProps>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props => (props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none')};
  transform: translateY(${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')});
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const Navbar = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = styled.a`
  display: block;
  color: ${colors.primary};
  width: 42px;
  height: 42px;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.transGreen};
    }
  }
  svg {
    fill: ${colors.primary};
    transition: ${theme.transition};
    user-select: none;
  }
`;
const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

interface HamburgerInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  menuOpen: boolean;
}
const HamburgerInner = styled.div<HamburgerInnerProps>`
  background-color: ${colors.primary};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)});
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.primary};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = styled.ol`
  ${mixins.flexBetween};
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.small};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.primary};
    font-size: ${fontSizes.xsmall};
  }
  & a:link,
  & a:visited,
  & a:active,
  & a:focus {
    color: rgb(65, 199, 199);
    /* text-shadow: rgba(65, 199, 199, 0.4) 0px 2px 3px; */
  }
  &:hover {
    text-transform: uppercase !important;
    text-decoration: none;
    text-shadow: rgba(65, 199, 199, 0.9) 0px 2px 7px;
  }
`;
const NavLink = styled(Link)`
  padding: 12px 10px;
  transition: all 2s;
`;
const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
`;

const Span = styled.span`
  position: absolute;
  left: 15px;
  top: 8px;
`;

const DELTA = 5;

type ScrollDirection = 'none' | 'up' | 'down';

export default function Nav() {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const toggleMenu = () => setMenuOpen((s: boolean) => !s);

  const handleScroll = () => {
    console.log('handleScroll');
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }
    setLastScrollTop(fromTop);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  };

  const handleKeydown = e => {
    if (!menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      toggleMenu();
    }
  };

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
    // window.addEventListener('scroll', throttle(handleScroll()));
    // window.addEventListener('resize', () => throttle(handleResize));
    // window.addEventListener('keydown', handleKeydown);
    return () => {
      // setState((s: State) => ({ ...s, isMounted: false }));
      // window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('resize', handleResize);
      // window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleScroll]);

  return (
    <NavContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : 'ok'} />
      </Helmet>
      <Navbar>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fade' timeout={3000}>
              <Logo>
                <LogoLink href='/' aria-label='home'>
                  <IconAfro />
                  {/* <Span>C</Span> */}
                </LogoLink>
              </Logo>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fade' timeout={3000}>
              <Hamburger onClick={toggleMenu}>
                <HamburgerBox>
                  <HamburgerInner menuOpen={menuOpen} />
                </HamburgerBox>
              </Hamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks>
          <NavList>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames='fadedown' timeout={3000}>
                    <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                      <NavLink href={url}>{name}</NavLink>
                    </NavListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </NavList>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames='fadedown' timeout={3000}>
                <div style={{ transitionDelay: `600ms` }}>
                  <ResumeLink href='/resume1.pdf' target='_blank' rel='nofollow noopener noreferrer'>
                    Resume
                  </ResumeLink>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </NavLinks>
      </Navbar>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </NavContainer>
  );
}
