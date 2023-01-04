import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { configs } from '@/constants'

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='description'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem at sed quis dignissim quam turpis ac fames sit. In dolor sit eu turpis id integer pulvinar eu. Consectetur'
          />
          <meta name='theme-color' content='#FFC247' />

          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='icon' type='image/png' href='/static/apple-touch-icon.png' />
          <link rel='apple-touch-icon' href='/static/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.webmanifest' crossOrigin='' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap' />
          <link rel='preconnect' href='https://cdn.jsdelivr.net' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' />

          {configs.isProduction && <script src='https://www.googletagmanager.com/gtag/js?id=G-5E0FTWB4GX' async />}
        </Head>

        <body style={{ backgroundColor: '#0F0F14' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
