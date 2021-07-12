import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconGithub from '@/components/icons/github';
import IconLinkedin from '@/components/icons/linkedin';
import IconCodepen from '@/components/icons/codepen';
import IconInstagram from '@/components/icons/instagram';
import IconTwitter from '@/components/icons/twitter';
import IconStar from '@/components/icons/star';
import IconFork from '@/components/icons/fork';

import config from '@/config';
import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

const { colors, fontSizes, fonts } = theme;
const { socialMedia } = config;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkNavy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
const GithubLink = styled.a`
  color: ${colors.slate};
`;
const GithubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer = ({ githubInfo }) => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink href={url} target='_blank' rel='nofollow noopener noreferrer' aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink href='https://github.com/ankitkamboj18/' target='_blank' rel='nofollow noopener noreferrer'>
        <div>Designed &amp; Built by Ankit Kamboj</div>
        {githubInfo.stars === 0 && githubInfo.forks === 0 && (
          <GithubInfo>
            <span>
              <IconStar />
              <span>{githubInfo.stars}</span>
            </span>
            <span>
              <IconFork />
              <span>{githubInfo.forks}</span>
            </span>
          </GithubInfo>
        )}
      </GithubLink>
    </Copy>
  </FooterContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
