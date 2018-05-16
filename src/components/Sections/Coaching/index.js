import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import Content from '../../Content';
import Chevron from '../../Chevron';
// import { Primary as Button } from '@atom/button';
import * as animationData from './coaching.json';

import './Coaching.css';

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

        const paragraph = "Find out what's affecting your credit sore and how to improve it, so you can apply for finance with confidence. And with the help of our free coaching plans, you'll know exactly how to get your money in tip top shape. So whether you're buying a car or a home, or just want to bump up your credit score, we'll help you reach your financial goals.";

        return (
            <section className="coaching">
                <div className="anchor" id="coaching"></div>
                <div className={containerClass}>
                    <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                        isStopped={this.state.isStopped}
                        isPaused={this.state.isPaused}/>
                </div>
                <div className="coaching__content-container">
                    <Content
                        heading="Improve your credit score"
                        paragraph={paragraph}
                        cta="Sign up" />
                    <Chevron />
                </div>
            </section>
        )
    }
}
