// TODO: The theme is opposite to the form elements theme

import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

import className from '../../helpers/className';
import Spinner from '../Spinner';

const Button = ({children, disabled, loading, onClick, theme}) => {

    if (disabled) {
        disabled = 'disabled';
    }

    let buttonContent;
    if (loading) {
        buttonContent = (<Spinner children={children} size="20px"/>);
    } else {
        buttonContent = <span className="button__content">{children}</span>;
    }

    let buttonClass = className('button', {
        '--dark': theme === 'dark',
        '--dark-inverse': theme === 'dark-inverse',
        '--pending': loading,
        '--disabled': disabled,
        '--responsive-secondary': theme === 'responsive-secondary',
        '--secondary-mobile': theme === 'secondary-mobile',
        '--responsive': theme === 'responsive'
    });

    return (
        <button
            className={buttonClass}
            disabled={disabled || loading}
            onClick={onClick}>
            {buttonContent}
        </button>
    );
};

export default Button;
