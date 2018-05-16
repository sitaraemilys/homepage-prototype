import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Logo';
import Button from '../Button';
import Hamburger from '../Hamburger';
import './MobileMenu.css';

const SECONDARY_DONUT = 1;
const REPORT = 2;
const COACHING = 3;
const OFFERS = 4;
const SAFE_HANDS = 5;

class MobileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        return (
            <div className="mobile-menu">

                <div className="header-secondary__content">
                    <a  onClick={() => this.jumpTo(SECONDARY_DONUT)} href="#secondary-hero">What is a credit score</a>
                    <a  onClick={() => this.jumpTo(REPORT)} href="#report">Your free credit report</a>
                    <a  onClick={() => this.jumpTo(COACHING)} href="#coaching">Improve your credit score</a>
                    <a  onClick={() => this.jumpTo(OFFERS)} href="#offers">Offers tailored to you</a>
                    <a  onClick={() => this.jumpTo(SAFE_HANDS)} href="#safe-hands">You're in safe hands</a>
                </div>

            </div>
        );
    }
}

export default MobileMenu;
