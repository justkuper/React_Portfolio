import React from 'react';
import "./style.css";
import pic from "../images/profile_pic.jpg";

export default function About() {
    return (
        <div className="About">
            <img src={pic} />
            <p>About Me</p>
            <h2> I have gone skydiving twice, and now roller coasters do nothing for me.
            <br /> Trek over Wars. 🖖
            <br />Picard over Kirk. "Make it so."
            <br />Ryker with a beard. 🧔🏽
            <br />It is pronounced data not Data. Now we both know. 🗣️ </h2>
           
        </div>
    )
}