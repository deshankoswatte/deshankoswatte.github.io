import React, {useState, useEffect, useMemo} from 'react';
import Image from 'next/image'
import {useTransition, animated} from 'react-spring';
import profilePicture from '../assets/profile_picture.jpg';

const words = [
    {text: "SW Engineer", color: '#2680eb'},
    {text: "Developer", color: '#44b556'},
    {text: "Tech Geek", color: '#6767ec'},
    {text: "Contributor", color: '#d83790'},
];

export default function Intro() {
    const [tick, setTick] = useState(0);

    const items = useMemo(() => words[tick % words.length], [tick]);

    const transitions = useTransition(items, item => item.text, {
        from: item => ({color: item.color, opacity: 0, transform: 'translate3d(0,-40px,0)'}),
        enter: item => ({color: item.color, opacity: 1, transform: 'translate3d(0,0px,0)'}),
        leave: item => ({color: item.color, opacity: 0, transform: 'translate3d(0,40px,0)'}),
    });

    useEffect(() => {
        let timeout = setInterval(
            () => setTick(state => (document.hasFocus() ? state + 1 : state)),
            2000,
        );

        return () => {
            clearInterval(timeout);
        };
    }, []);

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
            <h1 className="row title">
                <div className="col-12 col-md-6">
                    <div className="row justify-content-center justify-content-md-end">
                        Dehami<span>is a</span>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {transitions.map(({item, props, key}) => (
                        <animated.div className="animated-word" key={key} style={props}>
                            {item.text}
                        </animated.div>
                    ))}
                </div>
            </h1>
            <h2 className="row justify-content-center">Connect with me @:</h2>
            <p>
                <a href="mailto:dehami.deshan@gmail.com">
                    <img
                        src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
                        alt="deshan_koswatte_mail"
                        height="45"
                        width="45"
                    />
                </a>&nbsp;
                <a href="https://twitter.com/deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg"
                        alt="deshan_koswatte_twitter"
                        height="45"
                        width="45"
                    />
                </a>&nbsp;
                <a href="https://lk.linkedin.com/in/deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                        alt="deshan_koswatte_linkedin"
                        height="40"
                        width="40"
                    />
                </a>&nbsp;
                <a href="https://medium.com/@deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/medium/medium-tile.svg"
                        alt="deshan_koswatte_medium"
                        height="40" width="40"
                    />
                </a>&nbsp;
                <a href="https://github.com/deshankoswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                        alt="deshan_koswatte_github"
                        height="40"
                        width="40"
                    />
                </a>&nbsp;
                <a href="https://stackoverflow.com/users/11383375/deshan-koswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg"
                        alt="deshan_koswatte_stackoverflow"
                        height="40"
                        width="40"
                    />
                </a>&nbsp;
                <a href="https://www.facebook.com/dehami.koswatte">
                    <img
                        src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
                        alt="deshan_koswatte_facebook"
                        height="40"
                        width="40"
                    />
                </a>&nbsp;
            </p>
        </div>
    );
}
