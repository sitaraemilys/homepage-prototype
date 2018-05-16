// TODO: The theme is oppersite to the form elements theme

import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.scss';

import Svg from '../Svg';
import svgSpinner from './assets/spinner.svg';

const Spinner = ({children, size}) => {

    return (
        <div className="spinner__loader">
            <span className="spinner__text">{children}</span>
            <Svg viewBox="0 0 16 16" size={size}>{svgSpinner}</Svg>
        </div>
    );
};

Spinner.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string
};

export default Spinner;
