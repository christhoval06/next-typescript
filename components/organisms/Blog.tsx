import styled from 'styled-components';

import ImageWrapper from '@/components/molecules/ImageWrapper';
import Tags from '@/components/molecules/Tags';

const Details = styled.div`
  display: flex;
`;

const DateAndPreview = styled.div`
  position: relative;
  margin-right: 45px;
  flex-shrink: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 170px;
  width: 170px;
`;

const Date = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  /* color: rgb(41, 41, 41); */
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  transition-property: initial;
  span {
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
  }
`;
const Preview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transform: translateY(-100%);
  transition-duration: 0.35s;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  transition-property: initial;
`;

const PostStyled = styled.div`
  position: relative;
  margin-bottom: 120px;

  &:hover ${Preview} {
    transform: translateY(0);
  }

  &:hover ${Date} {
    transform: translateY(100%);
  }
`;

const Content = styled.div`
  align-self: center;
  p {
    font-size: 15px;
    /* color: rgb(41, 41, 41); */
    font-weight: 400;
    line-height: 2;
    margin-bottom: 0px;
  }
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 700;
  /* color: rgb(41, 41, 41); */
  line-height: 1.53;
  margin-bottom: 10px;
  font-family: 'Fira Sans', sans-serif;
  a {
    /* color: rgb(41, 41, 41); */
  }
`;

const ReadMore = styled.div`
  margin-top: 16px;
  a {
    font-size: 13px;
    font-weight: 500;
    /* color: rgb(41, 41, 41); */
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    transition-property: initial;
  }
`;

type Props = {
  day: number;
  month: string;
  children: string;
  title: string;
  image: string;
  tags: Array<string>;
  url: string;
};

/**
 * https://dev.to/stereobooster/styled-components-one-more-time-5g0l
 */
export default function Blog({ day, month, children, title, image, tags, url }: Props) {
  return (
    <PostStyled>
      <Details>
        <DateAndPreview>
          <Date>
            {day}
            <span>{month}</span>
          </Date>
          <Preview>
            <a href={url}>
              <ImageWrapper preview image={image}>
                {title}
              </ImageWrapper>
            </a>
          </Preview>
        </DateAndPreview>
        <Content>
          <Tags tags={tags} preview />
          <Title>
            <a href={url}>{title}</a>
          </Title>
          <p>{children}</p>
          <ReadMore>
            <a href={url}>Read More</a>
          </ReadMore>
        </Content>
      </Details>
    </PostStyled>
  );
}
