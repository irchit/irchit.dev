import React from "react";
import styles from "../css/aboutme.module.css";

export default function AboutMe(){

    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <img src="./me.jpg" />
                    <h1>Chiţea<br/>Răzvan</h1>
                    <line />
                    <p>Student | Game Dev | Web Dev</p>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com"><img src="./Logos/linkedin.png"/></a>
                        <a href="https://www.github.com"><img src="./Logos/github.png"/></a>
                        <a href="https://www.instagram.com"><img src="./Logos/instagram.png"/></a>
                        <a href="https://www.facebook.com"><img src="./Logos/facebook.png"/></a>
                    </div>
                </div>
                <div className={styles.contentRight}>
                    <h1>Who Am I?</h1>
                    <a className={styles.button} href="./cv">See my CV</a>
                    <p>
                        I am a computer science student at UBB-Cluj. I live mostly in Cluj and Braşov.
                        Most of my projects are Games(Unity) and Websites(Next.js), but I have knowledge in other domains
                        too, like API Managment, Database Management, App Dev, Algorithmics, AI, Server Managment and many others... I mostly like 
                        coding in <span>python</span>, <span>js</span>, <span>java</span> and <span>c#</span>, but I have coded most of my life in <span>C/C#</span> and I also 
                        interacted with <span>php</span>, <span>assembly</span> and <span>lisp</span>.<br/><br/>
                        I began coding in 2018 with C++ and when after the pandemic started, I touched other domains 
                        of programming too. In my first year of university I recived an intership at a start-up in Cluj (Mad&More SRL) 
                        and now I'm available for work.
                    </p>
                    <line />
                </div>
            </div>
        </div>
    );
}