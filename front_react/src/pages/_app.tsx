import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/login.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
