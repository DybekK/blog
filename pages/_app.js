import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return <Component {...pageProps} />
}
