import React from 'react';

import './About.css';

import learn from './assets/learn.png';
import about from './assets/about.png';
import careers from './assets/careers.png';

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="about">

                <div className="about__content-container">
                    <div className="about__content">
                        <h1 className="content__heading">We make ClearScore</h1>
                        <p className="content__paragraph">See how ClearScore can help you meet your financial goals, Whether that’s fixing an issue on your CreditScore or saving money on financial services.</p>
                    </div>
                </div>

                <div className="about__cards-container">
                    <div className="about__cards">
                        <div className="card">
                            <img className="card__image" src={learn}/>
                            <div className="card__content">
                                <h1 className="card__section">LEARN</h1>
                                <h1 className="card__heading">Your money, sorted</h1>
                                <p className="card__subheading">Finances can be confusing. Here you can find clear information, so you can take control and feel good about your money.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card__image" src={about}/>
                            <div className="card__content">
                                <h1 className="card__section">ABOUT</h1>
                                <h1 className="card__heading">Our vision</h1>
                                <p className="card__subheading">ClearScore's vision is to help everyone, no matter what their circumstances, achieve greater financial wellbeing. We've started this journey by giving everybody access to their credit score and report for free, forever.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card__image" src={careers}/>
                            <div className="card__content">
                                <h1 className="card__section">CAREERS</h1>
                                <h1 className="card__heading">At ClearScore, free credit scores are just the beginning</h1>
                                <p className="card__subheading">We're looking for high potential, talented people to help us scale ClearScore and fulfil the incredible opportunity we have on our hands.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
