import React, { useState, useEffect, useRef } from 'react';
import PropTypes, { number } from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import useScrollReveal from '@/hooks/useScrollReveal';
import config from '@/config';

import IconGithub from '@/components/icons/github';
import IconExternal from '@/components/icons/external';
import IconFolder from '@/components/icons/folder';
import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';
import Section from '@/styles/Section';
import Button from '@/styles/Button';

const { colors, fontSizes, fonts } = theme;
const { srConfig } = config;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;

const ProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  tabIndex: number;
}
const Project = styled.div<ProjectProps>`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.primary};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const IconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxlarge};
  color: ${colors.lightestSlate};
`;
const ProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

const GRID_LIMIT = 6;

interface IProject {
  show?: boolean;
  github: string;
  external: string;
  title: string;
  tech: Array<string>;
  html: string;
}

interface Props {
  data: Array<IProject>;
}
const Projects = ({ data }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const sr = useScrollReveal();
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const firstSix = data.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? data : firstSix;

  return (
    <ProjectsContainer id='projects'>
      <ProjectsTitle ref={revealTitle}>Other Projects</ProjectsTitle>
      <ProjectsGrid>
        <TransitionGroup className='projects'>
          {projectsToShow &&
            projectsToShow.map(({ github, external, title, tech, html }: IProject, i: number) => {
              return (
                <CSSTransition key={i} classNames='fadeup' timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300} exit={false}>
                  <Project
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex={0}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}
                  >
                    <ProjectInner>
                      <header>
                        <ProjectHeader>
                          <Folder>
                            <IconFolder />
                          </Folder>
                          <Links>
                            {github && (
                              <IconLink href={github} target='_blank' rel='nofollow noopener noreferrer' aria-label='Github Link'>
                                <IconGithub />
                              </IconLink>
                            )}
                            {external && (
                              <IconLink href={external} target='_blank' rel='nofollow noopener noreferrer' aria-label='External Link'>
                                <IconExternal />
                              </IconLink>
                            )}
                          </Links>
                        </ProjectHeader>
                        <ProjectName>{title}</ProjectName>
                        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        <TechList>
                          {tech.map((tech: string, i: number) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </TechList>
                      </footer>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ProjectsGrid>

      <ShowMoreButton onClick={() => setShowMore(!showMore)}>{showMore ? 'Fewer' : 'More'} Projects</ShowMoreButton>
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      github: PropTypes.string.isRequired,
      external: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      html: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Projects;
