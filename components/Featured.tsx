import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useScrollReveal from '@/hooks/useScrollReveal';
import config from '@/config';
import IconGithub from '@/components/icons/github';
import IconExternal from '@/components/icons/external';

import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

import Section from '@/styles/Section';
import Heading from '@/styles/Heading';

const { colors, fontSizes, fonts } = theme;
const { email, srConfig } = config;

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ContentContainer = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  color: ${colors.primary};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.large};
  border-radius: ${theme.borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.slate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.lightestSlate};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const ImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.primary};
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

interface IFeature {
  external: string;
  title: string;
  tech: Array<string>;
  github: string;
  cover: string;
  html: string;
  show?: boolean;
}
interface Props {
  data: Array<IFeature>;
}
const Featured = ({ data }: Props) => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const sr = useScrollReveal();
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <FeaturedContainer id='featured'>
      <Heading ref={revealTitle}>Some Things I&apos;ve Built</Heading>

      <div>
        {data &&
          data.map(({ title, external, html, tech, github, cover }: IFeature, i: number) => {
            return (
              <Project key={i} ref={el => (revealProjects.current[i] = el)}>
                <ContentContainer>
                  <FeaturedLabel>Featured Project</FeaturedLabel>
                  <ProjectName>
                    {external ? (
                      <a href={external} target='_blank' rel='nofollow noopener noreferrer' aria-label='External Link'>
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </ProjectName>
                  <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <TechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </TechList>
                  )}
                  <Links>
                    {github && (
                      <a href={github} target='_blank' rel='nofollow noopener noreferrer' aria-label='Github Link'>
                        <IconGithub />
                      </a>
                    )}
                    {external && (
                      <a href={external} target='_blank' rel='nofollow noopener noreferrer' aria-label='External Link'>
                        <IconExternal />
                      </a>
                    )}
                  </Links>
                </ContentContainer>

                <ImgContainer href={external ? external : github ? github : '#'} target='_blank' rel='nofollow noopener noreferrer'>
                  <FeaturedImg src={cover} alt={title} width='100%' height='100%' />
                </ImgContainer>
              </Project>
            );
          })}
      </div>
    </FeaturedContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      external: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      show: PropTypes.bool,
    }),
  ).isRequired,
};

export default Featured;
