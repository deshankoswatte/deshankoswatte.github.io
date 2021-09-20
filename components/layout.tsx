import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Head>
                <title>Dehami Koswatte | Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header/>
            <main className="container">{children}</main>
            <Footer/>
        </>
    );
}
