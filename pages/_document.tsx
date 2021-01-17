import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;


        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Meta description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}