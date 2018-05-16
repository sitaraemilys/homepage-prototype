import React from 'react';

import Svg from '../Svg';

import './Hamburger.css';

const Hamburger = () => {

    return (
        <div className="hamburger">
            <Svg size="24px">
                <g>
                    <path d="M336.7 381.3h-315c-11.3 0-20.6 9-20.6 20.5s9.5 20.6 20.8 20.6h315c11.4 0 20.6-9 20.6-20.6 0-11.3-9.3-20.5-20.6-20.5zM490.4 223H21.6C10.3 223 1 232.3 1 243.7c0 11.5 9.3 20.6 20.6 20.6h468.8c11.4 0 20.6-9 20.6-20.6 0-11.4-9.2-20.5-20.6-20.5zM21.6 106h468.8c11.4 0 20.6-9 20.6-20.6C511 74 501.8 65 490.4 65H21.6C10.3 65 1 74 1 85.3 1 96.8 10.3 106 21.6 106z"/>
                </g>
            </Svg>
        </div>
    )
}

export default Hamburger;
