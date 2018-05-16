import React from 'react';
import PropTypes from 'prop-types';

import './Svg.scss';

const Svg = ({size, viewBox, width, height, preserveAspectRatio, children, className}) => {

    if (size) {
        width = size;
        height = size;
    }

    let svgStyle = {
        fill: 'currentcolor',
        verticalAlign: 'middle',
        width: width,
        height: height
    };

    className = className + ' cs-svg';

    return (
        <svg
            style={svgStyle}
            viewBox={viewBox}
            preserveAspectRatio={preserveAspectRatio}
            className={className}>
            {children}
        </svg>
    );
};

/**
 * Component PropTypes
 */
Svg.propTypes = {
    size: PropTypes.string,
    viewBox: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    preserveAspectRatio: PropTypes.string
};

/**
 * Default values for PropTypes
 */
Svg.defaultProps = {
    viewBox: '0 0 512 512',
    preserveAspectRatio: 'xMidYMid meet',
    height: '2em',
    width: '2em'
};

export default Svg;
