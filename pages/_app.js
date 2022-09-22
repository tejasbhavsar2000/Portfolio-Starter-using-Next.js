import dynamic from "next/dynamic";
const Nav = dynamic(() => import("@components/Nav"));
import "@styles/global.css";
import { Fragment } from "react";
import "@styles/app.css";
const Footer = dynamic(() => import("@components/Footer"));
import { AnimatePresence } from "framer-motion";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <div className="layout">
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AnimatePresence>
    </Fragment>
  );
}
