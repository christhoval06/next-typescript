import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '@/layouts/Layout';
import Main from '@/styles/Main';

import theme from '@/styles/theme';
import mixins from '@/styles/mixins';
import media from '@/styles/media';

const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`;
const Title = styled.h1`
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 12vw;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const Subtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

export default function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <MainContainer id='content'>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <HomeButton href='/'>Go Home</HomeButton>
      </MainContainer>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  //   location: PropTypes.object.isRequired,
};
