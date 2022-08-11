import { useState,useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import { MenuContext } from "../helper/Context"
//import { Helmet } from "react-helmet";

import IbmChatbot from "../components/IbmChatbot";


import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const toggle=()=>{setIsVisible(!isVisible)}
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <MenuContext.Provider value={{ isVisible, toggle }}>
        <IbmChatbot />
        <Header />
        <Content />
        <Footer />
      </MenuContext.Provider>
    </ErrorBoundary>
  );
}
