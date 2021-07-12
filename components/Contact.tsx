import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useScrollReveal from '@/hooks/useScrollReveal';
import config from '@/config';

import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

import Section from '@/styles/Section';
import Heading from '@/styles/Heading';

const { colors, fontSizes, fonts } = theme;
const { email, srConfig } = config;

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const GreenHeading = styled(Heading)`
  display: block;
  color: ${colors.primary};
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.small};
    ${media.desktop`font-size: ${fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

interface Props {
  title: string;
  html?: string;
  children?: React.ReactNode;
}
const Contact = ({ title, html, children }: Props) => {
  const revealContainer = useRef(null);
  const sr = useScrollReveal();
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <ContactContainer id='contact' ref={revealContainer}>
      <GreenHeading>What&apos;s Next?</GreenHeading>

      <Title>{title}</Title>

      <div dangerouslySetInnerHTML={{ __html: html }}>{children}</div>

      <EmailLink href={`mailto:${email}`} target='_blank' rel='nofollow noopener noreferrer'>
        Say Hello
      </EmailLink>
    </ContactContainer>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string,
  children: PropTypes.node,
};

export default Contact;
