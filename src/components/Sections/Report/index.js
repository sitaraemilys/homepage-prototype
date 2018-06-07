import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import Content from '../../Content';
import Chevron from '../../Chevron';
import * as animationData from './report.json';

import './Report.css';

const ID = 2;

export default class Report extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {isStopped: true, isPaused: false, jumpTo: false, inView: false};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('animationEnd', this.removeAnimateClass);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    removeAnimateClass() {
        this.setState({jumpTo: false})
    }

    loadAnimation() {
        this.scaleModifier = '--scale';
        this.setState({isStopped: false});
    }

    handleScroll(event) {
        const elementTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
        if (elementTop <= 200 && elementTop >= 0) {
            this.setState({inView: true});
            this.props.updateSectionId(ID);
            this.loadAnimation();
        }
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        };

        const containerClass = `report__animation-container report__animation-container${this.scaleModifier}`;
        let animateClass;


        if (this.props.jumpToId === ID) {
            animateClass = 'fade-in';
        }

        const paragraph = "Understand what’s affecting your score and how to improve it with your full monthly credit report. It shows you what banks and lenders see when you apply for credit, so checking it could prevent any nasty surprises."
        return (
            <section className="report">
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
                <div className="report__content-container">
                    <div className={animateClass}>
                        <Content
                            heading="Check your free credit report"
                            paragraph={paragraph}
                            cta="See my report" />
                    </div>
                    <Chevron />
                </div>
                <div className="anchor" id="report"></div>
            </section>
        )
    }
}
