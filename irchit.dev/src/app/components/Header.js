import React from "react";
import styles from "../css/header.module.css";

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <a href="#"><p>■ <span>Chiţea Răzvan</span> / irchit dev</p></a>
            </div>
            <div>
                <ul className={styles.links}>
                    <li><a href="projects">projects</a></li>
                    <li><a href="cv">curriculum vitae</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
            </div>
        </div>
    );
}