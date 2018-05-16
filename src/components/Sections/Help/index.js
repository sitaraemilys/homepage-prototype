import React from 'react';

import Logo from '../../Logo';

import './Help.css';

export default class Help extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="help">
                <div className="help__container">
                    <div className="help__logo">
                        <Logo largeMobile />
                    </div>
                    <div className="help__content">
                        <a href="" className="help__link">Help</a>
                        <a href="" className="help__link">Get in touch</a>
                    </div>
                    <div className="help__icons">
                    </div>
                    <div className="help__legals">
                        <p className="help__paragraph">
                            47 Durham Street, London, SE11 5JA, UK<br />
                            Registered in England (Company number 09221862), Authorised and Regulated by the Financial Conduct Authority. (FRN: 654446)
                            © Clear Score Technology Ltd. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
