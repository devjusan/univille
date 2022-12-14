import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Benne&family=Inter:wght@300;500;700&family=Saira:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <link href="../../public/favicon.png" type="image/png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main /> <NextScript />
        </body>
      </Html>
    );
  }
}
