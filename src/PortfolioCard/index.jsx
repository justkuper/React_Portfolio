import React from 'react';
import "./style.css";

export default function PortfolioCard({data}) {
    return (
        <div className="PortfolioCard">
            <img src = {data.img} alt = {data.title}/>
            <div className="overlay, ribbon">
                <div className="links">
                <a href={data.deploy} target="_blank"> <h3>{data.title}</h3></a>
                <a href={data.link} target="_blank">repo</a>
                </div>
            </div>
        </div>
    )
}