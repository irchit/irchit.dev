import React from "react";
import styles from "../css/footer.module.css";

export default function Footer(){
    return (
        <div className={styles.main}>
            <div id="copyright">
                <p>©2024 Chiţea Răzvan</p>
                <a href="">See all resources...</a>
            </div>
            <div>
                Everyday, Everywhere, Anytime
            </div>
            <div className={styles.contact}>
                <p>Contact</p>
                <div>
                    <a href="mailto:rchitea@yahoo.com">email me</a>
                    <a href="https://www.instagram.com/irchit.cs" _target="blank">follow me</a>
                </div>
            </div>
        </div>
    );
}