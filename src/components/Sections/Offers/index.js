import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
// import { Primary as Button } from '@atom/button';
import Content from '../../Content';
import Chevron from '../../Chevron';
import * as animationData from './offers.json';

import './Offers.css';

const ID = 4;

export default class Offers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: true, isPaused: false};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    loadAnimation() {
        this.scaleModifier = '--scale';
        this.setState({isStopped: false});
    }

    handleScroll(event) {
        const elementTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
        if (elementTop <= 200 && elementTop >= 0) {
            this.props.updateSectionId(4);
            this.loadAnimation();
        }
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        };

        const containerClass = `offers__animation-container offers__animation-container${this.scaleModifier}`;
        const paragraph = "We find you the best deals for credit cards, loans, mortgages and energy based on your financial situation, and tell you how likely you are to be accepted. Compare the best options on the market, personalised for you, all in one place. We search the market, so you don't have to."

        let animateClass;

        if (this.props.jumpToId === ID) {
            animateClass = 'fade-in';
        }

        return (
            <section className="offers">
                <div className={containerClass}>
                    <div className={animateClass}>
                        <Lottie
                            options={defaultOptions}
                            height={500}
                            width={500}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}/>
                    </div>
                </div>
                <div className="offers__content-container">
                    <div className={animateClass}>
                        <Content
                            heading="Offers tailored to you"
                            paragraph={paragraph}
                            cta="Show me my offers" />
                    </div>
                    <Chevron />
                </div>
                <div className="anchor" id="offers"></div>
            </section>
        )
    }
}
