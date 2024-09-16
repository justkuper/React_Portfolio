import react, { useState } from 'react';
import PortfolioCard from "../PortfolioCard";
import nestifyIMG from "../images/nestify.png";
import prestigeplannersIMG from "../images/prestigeplanners.png";
import whatsfordinnerIMG from "../images/whatsfordinner.png";
import "./style.css";

export default function Portfolio() {
    const [projects] = useState([
        {
            title: "Nestify",
            img: nestifyIMG,
            link: "https://github.com/justkuper/Nestify"
        },
        {
            title: "Prestige Planners",
            img: prestigeplannersIMG,
            deploy: "https://prestigeplanners.netlify.app",
            link: "https://github.com/justkuper/PrestigePlanner_Client"
        },
        {
            title: "What's for Dinner",
            img: whatsfordinnerIMG,
            deploy: "https://justkuper.github.io/Project-1/",
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