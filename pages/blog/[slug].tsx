import Head from 'next/head';
import styled from 'styled-components';

import BasicLayout from '@/layouts/Basic';
import ImageWrapper from '@/components/molecules/ImageWrapper';
import Tags from '@/components/molecules/Tags';

const Preview = styled.div`
  margin-top: 45px;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
  /* @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
  } */
  &::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: rgb(117, 117, 117);
    bottom: 0px;
    left: 10%;
    filter: blur(15px);
  }
`;

const Content = styled.div`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 870px;
  max-width: 100%;
`;

const PostStyled = styled.div`
  position: relative;
  @media (min-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
  }
  ${Preview} {
    margin-top: 0px;
    @media (min-width: 991px) {
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 42%;
      max-width: 42%;
      padding-right: 60px;
      margin-top: 0px;
    }
    &::before {
      width: calc(80% - 60px);
    }
  }
  ${Content} {
    @media (min-width: 991px) {
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 58%;
      max-width: 58%;
      margin-top: 0px;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  /* color: rgb(41, 41, 41); */
  line-height: 1.53;
  margin-bottom: 10px;

  @media (max-width: 990px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 575px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const Date = styled.span`
  display: block;
  font-size: 15px;
  /* color: rgb(41, 41, 41); */
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 990px) {
    font-size: 14px;
  }

  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const Footer = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  width: 58%;
  max-width: 100%;
  padding-top: 60px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (max-width: 990px) {
    padding-top: 40px;
    width: 100%;
  }
`;

const Share = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

/**
 * https://storyhub-personal-lite.redq.now.sh/react-live/
 */
export default function BlogEntries() {
  return (
    <BasicLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Blog Entry</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PostStyled>
        <Preview>
          <ImageWrapper image='https://storyhub-personal-lite.redq.now.sh/static/f7c4f09ffd2499f59c9be482ccab97dc/f3dc3/preview.webp'>
            Code blocks are very useful for developers
          </ImageWrapper>
        </Preview>
        <Content>
          <Title>Code blocks are very useful for developers</Title>
          <Date>26 MAY, 2019</Date>
        </Content>
      </PostStyled>
      <Footer>
        <Tags tags={['react', 'js', 'code']} />
        <Share>Share this:</Share>
      </Footer>
    </BasicLayout>
  );
}
