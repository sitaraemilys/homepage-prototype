import React from 'react';
import ReactDOM from 'react-dom';
import Content from '../../Content';
import Chevron from '../../Chevron';

import videoDesktop from './assets/videoDesktop.mp4';
import videoMobile from './assets/videoMobile.mp4';

import './SecondaryHero.css';

export default class SecondaryHero extends React.Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.videoElMobile = React.createRef();
        this.videoElDesktop = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const elementTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
        this.scaleModifier = '--scale';
        if (elementTop <= 200 && elementTop >= 0) {
            this.props.updateSectionId(1);
            this.loadAnimation();
        }
    }

    loadAnimation() {
        if (!this.played) {
            this.videoElDesktop.current.play();
            this.videoElMobile.current.play();
            this.played = true;
        }
    }

    render() {

        const paragraph = "It’s a rating based on your financial history, showing how likely you are to be accepted for credit. The higher your credit score, the more likely you are to be offered better deals and lower interest rates. Your score can go up and down - ClearScore can help you track the changes and stay on top of your score."
        const link = " Read our in-depth guide to credit scores.";

        const desktopVideoClass = `secondary-hero__video-desktop secondary-hero__video-desktop${this.scaleModifier}`


        return (
            <section className="secondary-hero">
            <div className="anchor" id="secondary-hero"></div>
                <div className="video-container">
                    <video ref={this.videoElDesktop} src={videoDesktop} className={desktopVideoClass} width="620"></video>
                    <video ref={this.videoElMobile} src={videoMobile} className="secondary-hero__video-mobile" width="620"></video>
                </div>
                <div className="secondary-hero__content-container">
                    <div>
                    <Content
                        heading="What is a credit score?"
                        paragraph={paragraph}
                        link={link}
                        cta="Get started" />
                    </div>
                    <Chevron />
                </div>
            </section>
        )
    }
}
