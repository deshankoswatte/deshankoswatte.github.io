import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet" type="text/css"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
