import React from 'react';
import '../style/about.css'

export default function About() {
    return (
        <div className="about-us">
            
            <h1 className="About-h1">- About Us -</h1>
            <hr className="hr-about" />
           
            <p className="About-p">iPlants was founded in 1988 by Francis Seyrès , a Canadian French teacher, who was really inspired by his mom to have different types of plants. Francis grew up seeing his mother decorating their home with plants. His mother, Dona, has always wanted her own little garden where she can bring all types of plants. Francis decided to establish the iPlants company to provide people who are intresed in plants </p>
            <img className="random-person" src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
            {/* <hr className="hr-about" /> */}
        </div>
    )
}