import React from 'react';
import "./style.css";
import pic from "../images/profile_pic.jpg";

export default function About() {
    return (
        <div className="About">
            <img src={pic} />
            <h1>About Me</h1>
            <h2> I have gone skydiving twice, and now roller coasters do nothing for me. Trek over Wars. Picard over Kirk. Ryker with beard. It is pronounced data not Data. Now we both know. </h2>
           
        </div>
    )
}