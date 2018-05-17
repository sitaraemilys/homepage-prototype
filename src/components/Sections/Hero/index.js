import React from 'react';
import ReactDOM from 'react-dom';
import LiTickLink from '../../LiTickLink';
import Button from '../../Button';
import Chevron from '../../Chevron';
import video from './assets/video.mp4';
import background from './assets/background.jpg';
import iphone from './assets/iphone.png';

import './Hero.css';

export default class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.videoEl = React.createRef();
    }

    loadAnimation() {
        this.played = this.videoEl.current.currentTime > 0 && !this.videoEl.current.paused && !this.videoEl.current.ended && video.readyState > 2;

        if (!this.played) {
            this.videoEl.current.play();
        }
    }

    componentDidMount() {
        this.loadAnimation();
    }

    render() {

        return (
            <section className="hero">
                <div className="hero__content-container">
                    <div className="hero__content">
                        <h1 className="hero__heading">Your credit score and report.<br />For free, forever.</h1>
                        <div className="buttons-container">
                            <Button theme="responsive" children="Sign up"/>
                            <Button theme="responsive-secondary" children="Learn more"/>
                        </div>
                        <div className="hero__secondary-content">
                            <h4 className="hero__subheading">Do more with your score</h4>
                            <ul className="hero__list">
                                <LiTickLink text="What is a credit score" link="#secondary-hero"></LiTickLink>
                                <LiTickLink text="Your free credit report" link="#report"></LiTickLink>
                                <LiTickLink text="Improve your credit score" link="#coaching"></LiTickLink>
                                <LiTickLink text="Offers tailored for you" link="#offers"></LiTickLink>
                                <LiTickLink text="You're in safe hands" link="#safe-hands"></LiTickLink>
                            </ul>
                            <Chevron />
                        </div>
                    </div>
                </div>
                <div className="hero__video-container">
                    <div className="hero__video-content">
                        <video ref={this.videoEl} src={video} className="hero__video" autoPlay="true">
                        </video>
                        <img className="hero__iphone" src={iphone}/>
                    </div>
                </div>
            </section>
        )
    }
}
