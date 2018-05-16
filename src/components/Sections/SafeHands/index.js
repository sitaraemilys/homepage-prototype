import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import Content from '../../Content';
import Chevron from '../../Chevron';
import background from './assets/background.jpg';
import * as animationData from './safe-hands.json';

import './SafeHands.css';

export default class SafeHands extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: true, isPaused: false, animationSize: 570};
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.resize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    loadAnimation() {
        this.scaleModifier = '--scale';
        this.setState({isStopped: false});
    }

    resize() {
        if (window.innerWidth < 1023) {
            this.setState({animationSize: 570});
            this.forceUpdate();
        } else {
            this.setState({animationSize:750});
        }
    }

    handleScroll(event) {
        const elementTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
        if (elementTop <= 200 && elementTop >= 0) {
            this.props.updateSectionId(5);
            this.loadAnimation();
        }
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        };

        const containerClass = `safe-hands__animation-container safe-hands__animation-container${this.scaleModifier}`;

        const paragraph = "We know your financial data is important. That's why we use the latest 256-bit encyption to ensure your information stays, well, yours. We promise not to sell your data to anyone or send you spam. Ever.";

        return (
            <section className="safe-hands">
                <div className="safe-hands__background">
                    <div className={containerClass}>
                        <Lottie
                            options={defaultOptions}
                            height={this.state.animationSize}
                            width={this.state.animationSize}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}/>
                    </div>
                </div>
                <div className="safe-hands__content-container">
                    <Content
                        heading="You're in safe hands"
                        paragraph={paragraph}
                        link="How are we keeping your data safe?"
                        href=""
                        cta="Sign up" />
                    <Chevron />
                </div>
                <div className="anchor" id="safe-hands"></div>
            </section>
        )
    }
}
