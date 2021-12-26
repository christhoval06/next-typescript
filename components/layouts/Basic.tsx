import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html,
  body {
      padding: 0;
      margin: 0;
      font-family: Nunito, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Nunito,sans-serif;
    color: #fff;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.2857rem;
    line-height:4rem
  }

  h2 {
    font-size: 2.57rem;
    line-height:3.2857rem
  }

  h3 {
    font-size: 2rem;
    line-height:2.7rem
  }

  h4 {
    font-size: 1.71rem;
    line-height:2.43rem
  }

  h5 {
    font-size: 1.43rem;
    line-height:2.14rem
  }

  h6 {
    font-size: 1.14rem;
    line-height: 1.857rem;
  }

  a, button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
