import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ScrollDirection } from 'react-use-scroll-direction';

import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

const { colors, fontSizes, fonts } = theme;

interface NavContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollDirection: ScrollDirection;
}

export const NavContainer = styled.header<NavContainerProps>`
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
  height: ${props => (props.scrollDirection === null ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props => (props.scrollDirection === 'UP' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none')};
  transform: translateY(${props => (props.scrollDirection === 'DOWN' ? `-${theme.navScrollHeight}` : '0px')});
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
export const Navbar = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
export const Logo = styled.div`
  ${mixins.flexCenter};
`;
export const LogoLink = styled.a`
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
export const Hamburger = styled.div`
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
export const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

interface HamburgerInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  menuOpen: boolean;
}
export const HamburgerInner = styled.div<HamburgerInnerProps>`
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
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
export const NavList = styled.ol`
  ${mixins.flexBetween};
`;
export const NavListItem = styled.li`
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
`;
export const NavLink = styled(Link)`
  transition: all 2s;
  padding: 12px 10px;
  &:focus,
  &:hover {
    color: rgb(65, 199, 199);
  }
  &:hover {
    text-transform: uppercase !important;
    text-decoration: none;
    text-shadow: rgba(65, 199, 199, 0.9) 0px 2px 7px;
  }
`;
export const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
`;

export const Span = styled.span`
  position: absolute;
  left: 15px;
  top: 8px;
`;
