// pages/_app.tsx
import '../styles/globals.css'; // Importa tus estilos globales
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;