import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  loadEmailJs = () => {
    return {
      __html: `
        emailjs.init("user_9tKg1D3DrUI6BoD3bquBc")
      `,
    };
  };
  render() {
    return (
      <Html>
        <Head>
          <title>TonyDC.</title>
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
          ></script>
          <script dangerouslySetInnerHTML={this.loadEmailJs()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
