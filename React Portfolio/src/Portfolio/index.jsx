import react, { useState } from 'react'
import "./style.css";

export default function Portfolio() {
    const [projects] = useState([
        {
            title: "Project 1",
            description: "Description of Project 1",
            image: "",
            link: "https://github.com"
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            image: "",
            link: "https://github.com"
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            image: "",
            link: "https://github.com"
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