import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '@/config';
import Menu from '@/components/Menu';
import IconAfro from '@/components/icons/afro';

import { useNavigation } from './useNavigation';
import {
  NavContainer,
  Navbar,
  Logo,
  LogoLink,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  NavLinks,
  NavList,
  NavListItem,
  NavLink,
  ResumeLink,
} from './components';

const { navLinks } = config;

export default function Nav() {
  const { isMounted, menuOpen, scrollDirection, toggleMenu } = useNavigation();
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
                navLinks.map(({ to, name }, i) => (
                  <CSSTransition key={i} classNames='fadedown' timeout={3000}>
                    <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                      <NavLink to={to} spy={true} smooth={true} offset={-70} duration={500}>
                        {name}
                      </NavLink>
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
