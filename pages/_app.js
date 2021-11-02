import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import {useEffect} from "react";
import AOS from "aos";
import Prism from 'prism-react-renderer/prism'
import "aos/dist/aos.css";

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-java")

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true
    });
    // AOS.refresh();
  }, []);

  return <Component {...pageProps} />
}
