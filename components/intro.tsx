import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import profilePicture from '../assets/profile_picture.jpg';

const words = [
    { text: "SW Engineer", color: '#2680eb' },
    { text: "Developer", color: '#44b556' },
    { text: "Tech Geek", color: '#6767ec' },
    { text: "Contributor", color: '#d83790' },
    { text: "Open Source Fan", color: '#e67e22' },
    { text: "Problem Solver", color: '#1abc9c' },
];

export default function Intro() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const cycle = setInterval(() => {
            if (!document.hasFocus()) return;
            setVisible(false);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % words.length);
                setVisible(true);
            }, 400);
        }, 2200);
        return () => clearInterval(cycle);
    }, []);

    const current = words[index];

    return (
        <div className="intro">
            <div className="row justify-content-center">
                <Image
                    src={profilePicture}
                    alt="Profile picture of the author"
                    className="profile-picture"
                    width={175}
                    height={175}
                />
            </div>
            <div>
                <h1 className="title-row">
                    <span className="title-static">Dehami</span>
                    <span className="title-isa">is a</span>
                    <span
                        className="animated-word"
                        style={{
                            color: current.color,
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(-20px)',
                            transition: 'opacity 0.35s ease, transform 0.35s ease',
                        }}
                    >
                        {current.text}
                    </span>
                </h1>
                <h2 className="row justify-content-center">Connect with me @:</h2>
                <p>
                    <a href="mailto:dehami.deshan@gmail.com">
                        <img className="img-large" src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="deshan_koswatte_mail" />
                    </a>&nbsp;
                    <a href="https://twitter.com/deshankoswatte">
                        <img className="img-large" src="https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg" alt="deshan_koswatte_twitter" />
                    </a>&nbsp;
                    <a href="https://lk.linkedin.com/in/deshankoswatte">
                        <img className="img-small" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="deshan_koswatte_linkedin" />
                    </a>&nbsp;
                    <a href="https://medium.com/@deshankoswatte">
                        <img className="img-small" src="https://www.vectorlogo.zone/logos/medium/medium-tile.svg" alt="deshan_koswatte_medium" />
                    </a>&nbsp;
                    <a href="https://github.com/deshankoswatte">
                        <img className="img-small" src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="deshan_koswatte_github" />
                    </a>&nbsp;
                    <a href="https://stackoverflow.com/users/11383375/deshan-koswatte">
                        <img className="img-small" src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg" alt="deshan_koswatte_stackoverflow" />
                    </a>&nbsp;
                    <a href="https://www.facebook.com/dehami.koswatte">
                        <img className="img-small" src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" alt="deshan_koswatte_facebook" />
                    </a>
                </p>
            </div>
        </div>
    );
}
