import React from 'react';
import ReactDOM from 'react-dom';
import LiTickLink from '../../LiTickLink';
import Button from '../../Button';
import Chevron from '../../Chevron';
import video from './assets/video.mp4';
import background from './assets/background.jpg';
import iphone from './assets/iphone.png';

import './Hero.css';

const SECONDARY_DONUT = 1;
const REPORT = 2;
const COACHING = 3;
const OFFERS = 4;
const SAFE_HANDS = 5;

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

    jumpTo(id) {
        this.props.updateJumpToId(id);
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
                            <h4 className="hero__subheading">Why ClearScore?</h4>
                            <ul className="hero__list">
                                <LiTickLink text="Track your free credit score" link="#secondary-hero"></LiTickLink>
                                <LiTickLink text="Check your free credit report" link="#report"></LiTickLink>
                                <LiTickLink text="Get a better score" link="#coaching"></LiTickLink>
                                <LiTickLink text="Offers tailored to you" link="#offers"></LiTickLink>
                                <LiTickLink text="Your data's in safe hands" link="#safe-hands"></LiTickLink>
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
