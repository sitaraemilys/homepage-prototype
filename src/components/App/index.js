import React from 'react';
import Report from '../Sections/Report';
import Offers from '../Sections/Offers';
import Coaching from '../Sections/Coaching';
import SafeHands from '../Sections/SafeHands';
import About from '../Sections/About';
import Help from '../Sections/Help';
import Hero from '../Sections/Hero';
import Header from '../Header';
import MobileMenu from '../MobileMenu';
import SecondaryHero from '../Sections/SecondaryHero';

import './App.css';

import $ from 'jquery';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            entered: false,
            sectionId: null,
            jumpToId: null,
            mobileMenu: false
        }
    }

    updateSectionId(idFromChild) {
        this.setState({sectionId: idFromChild});
    }

    updateJumpToId(idFromChild) {
        this.setState({jumpToId: idFromChild});
    }

    closeMobileMenu() {
        this.setState({mobileMenuOpen: false});
    }

    openMobileMenu() {
        this.setState({mobileMenuOpen: true});
    }

    componentDidMount() {
        this.setState((state) => ({entered: true}))
    }

    render() {
        const boundSectionId = this.updateSectionId.bind(this);
        const boundJumpToId = this.updateJumpToId.bind(this);
        const boundCloseMobileMenu = this.closeMobileMenu.bind(this);
        const boundOpenMobileMenu = this.openMobileMenu.bind(this);

        const mobileMenu = this.state.mobileMenuOpen ? (
                <MobileMenu updateJumpToId={boundJumpToId}
                            sectionId={this.state.sectionId}
                            close={boundCloseMobileMenu}/>
            ) : '';

        return (
            <div className="App">
                <Header updateJumpToId={boundJumpToId}
                        sectionId={this.state.sectionId}
                        openMobileMenu={boundOpenMobileMenu} />
                {mobileMenu}
                <Hero jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <SecondaryHero jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <Report jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <Coaching jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <Offers jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <SafeHands jumpToId={this.state.jumpToId} updateSectionId={boundSectionId} />
                <About />
                <Help />
            </div>
        );
    }
}
