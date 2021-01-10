import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

//  _document.js/tsx is a root file of our application
// in this file we can add/modify our static head, main and script tags
// probably in the future, this file will be larger
// we can't write some logic, include some layouts or use events like "onClick"
// https://nextjs.org/docs/advanced-features/custom-document


// SC feature with next.js
// serve requierd styles for first redner and then load rest styles for the app

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}