import React from 'react'
import resumePdf from "../images/kuperresume.pdf"
import "./style.css"

export default function Resume() {
    return (
        <div className="Resume">
            <h1>Resume</h1>
            <a href={resumePdf} download>Download My Resume</a>
            <br/>
            <h3>Top Skills</h3>
            <ul>
                <li>JS</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>I can eat an entire Reese's cup in one bite.</li>
            </ul>
        </div>
    )
}