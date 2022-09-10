import type { AppProps } from "next/app";
import Footer from "../components/ui/footer";
import { globalStyles } from "../styles/global";

globalStyles();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
