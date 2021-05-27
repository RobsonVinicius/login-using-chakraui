import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element{
    return (
      <Html>
        <Head>
          <title>Login Chakra UI</title>
          <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"></link>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
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