import react, { useState } from 'react';
import PortfolioCard from "../PortfolioCard";
import nestifyIMG from "../images/nestify.png";
import project2IMG from "../images/project2.png";
import project1IMG from "../images/project1.png";
import "./style.css";

export default function Portfolio() {
    const [projects] = useState([
        {
            title: "Nestify",
            description: "Description of Nestify",
            img: nestifyIMG,
            link: "https://github.com/justkuper/Nestify"
        },
        {
            title: "Prestige Planners",
            description: "Description of Project 2",
            img: project2IMG,
            link: "https://github.com/justkuper/PrestigePlanner_Client"
        },
        {
            title: "What's for Dinner",
            description: "Description of Project 3",
            img: project1IMG,
            link: "https://github.com/justkuper/Project-1"
        }
    ])
    return (
        <div className="Portfolio">
            <h1>Projects</h1>
            <div className="cardBox">
            {projects.map((thing,i)=><PortfolioCard key={i} data={thing}/>)}

            </div>
        </div>
    )
}