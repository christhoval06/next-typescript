import styled from 'styled-components';

const BlogStyled = styled.div`
  background: #191d2b;
  padding: 15px;
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;

  img {
    transition: all 0.4s ease-out;
    width: 100%;
  }

  &:hover {
    img {
      transform: scale(1.15);
    }
  }
`;

const Date = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  background: rgba(3, 127, 255, 0.8);
  color: #fff;
  padding: 10px;
  text-align: center;
  min-width: 80px;
  min-height: 80px;

  span {
    display: block;
  }

  span:first-child {
    font-size: 2.5rem;
    line-height: 1;
    font-weight: 700;
  }
  span:nth-child(2) {
    font-size: 1.3rem;
    line-height: 1;
    font-weight: 700;
  }
`;

type BlogProps = {
  children: string;
  day: number;
  month: string;
  url: string;
  image: string;
};
export function Blog({ day, children, month, url, image }: BlogProps) {
  return (
    <BlogStyled>
      <Image>
        <a href={url}>
          <img src={image} alt={children} />
        </a>
        <Date>
          <span>{day}</span>
          <span>{month}</span>
        </Date>
      </Image>
      <div>
        <h5>
          <a href={url}>{children}</a>
        </h5>
      </div>
    </BlogStyled>
  );
}

export default Blog;
