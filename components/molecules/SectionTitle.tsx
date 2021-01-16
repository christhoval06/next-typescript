import styled from 'styled-components';

const SectionTitleStyled = styled.div`
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
`;

const TitleStyled = styled.h2`
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  text-transform: uppercase;
  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
  }
  &::before {
    width: 100px;
    background: rgba(3, 127, 255, 0.3);
  }
  &:after {
    width: 35px;
    background: #037fff;
  }
`;

const SpanStyled = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  font-size: 6rem;
  line-height: 1;
  font-weight: 900;
  color: rgba(25, 29, 43, 0.44);
  display: inline-block;
  text-transform: uppercase;
  z-index: -1;
  transform: translateY(-40%);
  user-select: none;
  white-space: nowrap;
`;

type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <SectionTitleStyled>
      <TitleStyled>{children}</TitleStyled>
      <SpanStyled>{children}</SpanStyled>
    </SectionTitleStyled>
  );
}

export default SectionTitle;
