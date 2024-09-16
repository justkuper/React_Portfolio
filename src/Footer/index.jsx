import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./style.css";
export default function Footer() {
    return (
        <footer className="Footer">
            
            
            <ul>
                <li><a href="https://github.com/justkuper">
                    <FontAwesomeIcon icon={faGithub} flip size="3x" style={{ color: 'green', marginLeft: '15px' }} />
                </a>
                    <br />
                    <a href="https://github.com/justkuper">
                        <span className="d-inline-block mx-1 name">[ github ]</span>
                    </a>
                </li>
                <li className='center-text'><h3>Made with magic. Nothing to see here.</h3>
                <br />
                <h5>&copy; Kuper Bank 2024</h5>
                </li>
                <li><a href="https://www.linkedin.com/in/kuperbank/">
                    <FontAwesomeIcon icon={faLinkedin} flip size="3x" style={{ color: 'green', marginLeft: '15px' }} />
                    <br />
                    [ linkedIn ]</a></li>
            </ul>
        </footer>
    )
}