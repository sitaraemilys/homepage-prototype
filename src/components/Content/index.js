import React from 'react';
import Button from '../Button';

import './Content.css';

const Content = ({ heading, paragraph, link, cta, href }) => {

    const linkHtml = link ?
        <a className="content__link" href={href}>{link}</a> :
        '';

        return (
            <div className="content">
                <h1 className="content__heading">{heading}</h1>
                <p className="content__paragraph">{paragraph}</p>
                {linkHtml}
                <Button children={cta} />
            </div>
        )

};

export default Content;
