import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Logo';
import Button from '../Button';
import Hamburger from '../Hamburger';
import './Header.css';

const SECONDARY_DONUT = 1;
const REPORT = 2;
const COACHING = 3;
const OFFERS = 4;
const SAFE_HANDS = 5;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {hasScrolled: false};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const offsetY = window.pageYOffset;
        if (offsetY >= 590 && offsetY <= 5750) {
            this.setState({hasScrolled: true});
        } else if (offsetY <= 605 || offsetY > 5800) {
            this.setState({hasScrolled: false});
        }

    }

    triggerMobileMenu() {
        this.props.openMobileMenu();
    }

    jumpTo(id) {
        this.props.updateJumpToId(id);
    }

    func(id) {
        this.jumpTo(id)
    }

    render() {
        const primaryHeaderClass = this.state.hasScrolled ? 'hide' : 'header';
        const secondaryHeaderClass = this.state.hasScrolled ? 'header-secondary' : 'header-secondary header-secondary--hide';

        const sectionId = this.props.sectionId;

        const activeClass = 'header-secondary__title header-secondary__title--active';
        const passiveClass = 'header-secondary__title';

        const secondaryDonutClass = sectionId === SECONDARY_DONUT ? activeClass : passiveClass;
        const reportClass = sectionId === REPORT ? activeClass : passiveClass;
        const coachingClass = sectionId === COACHING ? activeClass : passiveClass;
        const offersClass = sectionId === OFFERS ? activeClass : passiveClass;
        const safeHandsClass = sectionId === SAFE_HANDS ? activeClass : passiveClass;

        return (
            <div>
                <header className="header-mobile">
                    <div onClick={() => this.triggerMobileMenu()} className="header-mobile__hamburger">
                        <Hamburger />
                    </div>
                   <div className="header-mobile__logo">
                       <Logo mobile full/>
                   </div>
                   <div className="header-mobile__content">
                       <span className="header-mobile__cta">Sign in</span>
                   </div>
               </header>
                <header className={primaryHeaderClass}>
                       <div className="header__logo">
                           <Logo full/>
                       </div>
                       <div className="header__content">
                           <Button theme="secondary">Sign in</Button>
                           <span className="header__title">Get in touch</span>
                           <span className="header__title">About us</span>
                       </div>
               </header>
                <header className={secondaryHeaderClass}>
                    <div className="header-secondary__logo">
                        <Logo/>
                    </div>
                    <div className="header-secondary__content">
                        <a className={secondaryDonutClass} onClick={() => this.jumpTo(SECONDARY_DONUT)} href="#secondary-hero">What is a credit score</a>
                        <a className={reportClass} onClick={() => this.jumpTo(REPORT)} href="#report">Your free credit report</a>
                        <a className={coachingClass} onClick={() => this.jumpTo(COACHING)} href="#coaching">Improve your credit score</a>
                        <a className={offersClass} onClick={() => this.jumpTo(OFFERS)} href="#offers">Offers tailored to you</a>
                        <a className={safeHandsClass} onClick={() => this.jumpTo(SAFE_HANDS)} href="#safe-hands">You're in safe hands</a>
                    </div>
                    </header>

            </div>
        );
    }
}

export default Header;
