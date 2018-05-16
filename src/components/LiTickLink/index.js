import React from 'react';
import Svg from '../Svg';

import './LiTickLink.css';

const LiTickLink = ({ text, link }) => {

        return (
            <li className="tick-ul">
                <span>
                    <Svg className="tick-ul__svg" size="10px">
                        <g><path d="M492.243,82.426c-24.137-24.137-66.311-24.137-90.448,0L190.964,293.178l-80.769-80.77   c-24.217-24.216-66.311-24.216-90.448,0c-24.997,24.917-24.997,65.531,0,90.448L145.73,428.939   c12.119,12.019,28.196,18.738,45.234,18.738c17.098,0,33.195-6.719,45.314-18.738l255.965-255.985   C504.361,160.856,511,144.757,511,127.64C511,110.623,504.361,94.525,492.243,82.426L492.243,82.426z"/>
                        </g>
                    </Svg>
                    <a className="tick-ul__link" href={link}>{text}</a>
                </span>
            </li>
        )

};

export default LiTickLink;
