import styled from 'styled-components';

const LinkStyled = styled.a`
  position: relative;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    width: 0;
    background-color: rgba(255, 255, 255, 1) !important;
  }

  &:after,
  &:before {
    position: absolute;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    content: '';
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:hover:before {
    width: 100%;
  }
`;

type Props = {
  children: string;
  href: string;
};
export function Link({ href, children }: Props) {
  return (
    <LinkStyled href={href} target='_blank'>
      {children}
    </LinkStyled>
  );
}

export default Link;
