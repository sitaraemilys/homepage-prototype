import React from 'react';
import ReactDOM from 'react-dom';
import Content from '../../Content';
import Chevron from '../../Chevron';

import videoDesktop from './assets/videoDesktop.mp4';
import videoMobile from './assets/videoMobile.mp4';

import './SecondaryHero.css';

const ID = 1;

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

        const paragraph = "Your credit score is a rating based on your financial history. With a higher score, you could get better deals and lower interest rates on finance. ClearScore can help you track the changes and stay on top of your score."
        const link = " Read our in-depth guide to credit scores.";

        const desktopVideoClass = `secondary-hero__video-desktop secondary-hero__video-desktop${this.scaleModifier}`

        let animateClass;

        if (this.props.jumpToId === ID) {
            animateClass = 'fade-in';
        }

        return (
            <section className="secondary-hero">
            <div className="anchor" id="secondary-hero"></div>
                <div className="video-container">
                    <div className={animateClass}>
                        <video ref={this.videoElDesktop} src={videoDesktop} className={desktopVideoClass} width="620"></video>
                        <video ref={this.videoElMobile} src={videoMobile} className="secondary-hero__video-mobile" width="620"></video>
                    </div>
                </div>
                <div className="secondary-hero__content-container">
                    <div className={animateClass}>
                        <Content
                            heading="Track your free credit score"
                            paragraph={paragraph}
                            link={link}
                            cta="See my score" />
                    </div>
                    <Chevron />
                </div>
            </section>
        )
    }
}
