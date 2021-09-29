import '../styles/index.css'
import '../styles/bootstrap-grid.css';
import '../styles/theme.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider enableSystem={true}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp
