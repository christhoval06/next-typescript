import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

const theme = {
  colors: {
    background: '#10121b',
    primary: '#0070f3',
    text: '#a4acc4',
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
