import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script src="https://unpkg.com/fast-average-color/dist/index.browser.min.js" />
    <Component {...pageProps} />;
    </>
    ) 
    
}
