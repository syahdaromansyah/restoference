import '../styles/globals.css';
import LayoutApp from '../components/LayoutApp';

export default function App({ Component, pageProps }) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  );
}
