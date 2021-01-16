import styled from 'styled-components';

/**
 * https://www.daggala.com/conditionals-in-styled-components/
 */

const Tags = styled.div<React.HTMLProps<HTMLDivElement> & { preview?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: ${props => `${props.preview ? 15 : 0}px`};
  @media (max-width: 575px) {
    display: none;
  }
  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(209, 0, 104);
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;

type Props = {
  preview?: boolean;
  tags: Array<string>;
};

/**
 * https://dev.to/stereobooster/styled-components-one-more-time-5g0l
 */
export default function Blog({ tags, preview = false }: Props) {
  return (
    <Tags preview={preview}>
      {tags.map((tag: string) => (
        <a href={`/tags/${tag}/`}>#{tag}</a>
      ))}
    </Tags>
  );
}
