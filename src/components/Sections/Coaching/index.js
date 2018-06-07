import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import Content from '../../Content';
import Chevron from '../../Chevron';
// import { Primary as Button } from '@atom/button';
import * as animationData from './coaching.json';

import './Coaching.css';

const ID = 3;

export default class Coaching extends React.Component {

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
            this.props.updateSectionId(3);
            this.loadAnimation();
        }
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        };

        const containerClass = `coaching__animation-container coaching__animation-container${this.scaleModifier}`;

        const paragraph = "With our free coaching plans, see what’s affecting your score and how to improve it. So whether you’re buying a car or a home, or just want to bump up your credit score, we’ll help you reach your financial goals.";

        let animateClass;

        if (this.props.jumpToId === ID) {
            animateClass = 'fade-in';
        }

        return (
            <section className="coaching">
                <div className="anchor" id="coaching"></div>
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
                <div className="coaching__content-container">
                    <div className={animateClass}>
                        <Content
                            heading="Get a better score"
                            paragraph={paragraph}
                            cta="Sign up" />
                    </div>
                    <Chevron />
                </div>
            </section>
        )
    }
}
