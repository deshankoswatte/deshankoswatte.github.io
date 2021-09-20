import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="container">
            <h1>
                <Link href="/">
                    <a className="header-link-large">Dehami Koswatte</a>
                </Link>
                <Link href="/">
                    <a className="header-link-small">DehamiK</a>
                </Link>
            </h1>
            <div>
                <a className="bma-coffee-large" href="https://www.buymeacoffee.com/deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/buymeacoffee/buymeacoffee-official.svg"
                        alt="deshan_koswatte_buy_me_a_coffee"
                        height="200"
                        width="200"
                    />
                </a>
                <a className="bma-coffee-small" href="https://www.buymeacoffee.com/deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/buymeacoffee/buymeacoffee-icon.svg"
                        alt="deshan_koswatte_buy_me_a_coffee"
                        height="45" width="45"/>
                </a>
            </div>
        </header>
    );
}
