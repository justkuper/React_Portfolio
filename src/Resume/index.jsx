import React from 'react';
import resumePDF from "../images/kuperresume.pdf";
import "./style.css";

export default function Resume() {
    return (
        <div className="Resume">
            <embed src={resumePDF} width="600" height="500" type="application/pdf" />
            <h1>Resume</h1>
            {/* <a href={resumePDF} download>Download My Resume</a> */}
            <br/>
            <h3>Proficiencies</h3>
            <ul>
                <li>JS</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>I can eat an entire Reese's cup in one bite.</li>
            </ul>
        </div>
    )
}