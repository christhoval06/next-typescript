import { useEffect, useRef } from 'react';
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
const { srConfig, github } = config;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.primary};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const AvatarContainer = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.primary};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.primary};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

interface Props {
  title: string;
  skills: Array<string>;
  avatar: string;
  html?: string;
  children?: React.ReactNode;
}
const About = ({ title, skills, avatar, html, children }: Props) => {
  const revealContainer = useRef(null);
  const sr = useScrollReveal();
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <AboutContainer id='about' ref={revealContainer}>
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }}>{children}</div>
          <SkillsContainer>{skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}</SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <AvatarContainer href={github}>
            <Avatar src={avatar} alt='Avatar' />
          </AvatarContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  avatar: PropTypes.string.isRequired,
  html: PropTypes.string,
  children: PropTypes.node,
};

export default About;
