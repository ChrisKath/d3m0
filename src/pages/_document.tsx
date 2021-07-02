import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='theme-color' content='#FFC247' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' href='/favicon.svg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://cdn.jsdelivr.net' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css?display=swap' />
        </Head>

        <body style={{ backgroundColor: '#0F0F14' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
