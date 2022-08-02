import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Header />
      <Content />
      <Footer />
    </ErrorBoundary>
  );
}
