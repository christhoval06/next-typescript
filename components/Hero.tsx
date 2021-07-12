import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';

import Section from '@/styles/Section';
import config from '@/config';
import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

const { colors, fontSizes, fonts } = theme;
const { email } = config;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors.primary};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;

const EmailLink = styled.a`
  ${mixins.bigButton};
  ${mixins.pulsateAnimation};
  margin-top: 50px;

  &:hover {
    ${mixins.pulsateAnimationHover};
  }
`;

interface Props {
  title: string;
  name: string;
  subtitle: string;
  html: string;
  children?: React.ReactNode;
}
const Hero = ({ title, name, subtitle, html, children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeoutID);
  }, []);

  const one = () => <Hi style={{ transitionDelay: '100ms' }}>{title}</Hi>;
  const two = () => <Name style={{ transitionDelay: '200ms' }}>{name}.</Name>;
  const three = () => <Subtitle style={{ transitionDelay: '300ms' }}>{subtitle}</Subtitle>;
  const four = () => (
    <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: html }}>
      {children}
    </Blurb>
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <HeroContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </HeroContainer>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  html: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
