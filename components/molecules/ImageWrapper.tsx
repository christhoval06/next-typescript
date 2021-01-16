import styled from 'styled-components';

const ImageWrapperStyled = styled.div`
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 1;
    transition: none;
    border-radius: 3px;
  }
`;

const Hidden = styled.div<React.HTMLProps<HTMLDivElement> & { preview?: boolean }>`
  width: 100%;
  padding-bottom: ${props => `${props.preview ? 100 : 133}%`};
`;

type Props = {
  children: string;
  image: string;
  preview?: boolean;
};

export default function ImageWrapper({ children, image, preview = false }: Props) {
  return (
    <ImageWrapperStyled>
      <Hidden aria-hidden='true' preview={preview} />
      <picture>
        <img src={image} alt={children} />
      </picture>
    </ImageWrapperStyled>
  );
}
