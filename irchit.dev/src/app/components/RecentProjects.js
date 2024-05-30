import React from "react";
import styles from "../css/recentprojects.module.css"

export default function RecentProjects() {

    var projects = [
        {
            'image_path': './Projects/pixel-fishing.png',
            'title': "Pixel Fishing",
            'code': "Unity/C#",
            'platform': "Web, Android",
            'github': "https://www.github.com",
            'link': "https://irchit-dev.itch.io/pixel-fishing"
        },
        {
            'image_path': './Projects/madmore.svg',
            'title': "Mad&More Landing Page",
            'code': "React.js",
            'platform': "Web",
            'github': "",
            'link': "https://www.madmore.ro"
        }
    ];

    return (
        <div className={styles.main}>
            <h1>Recent Projects</h1>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.image}>
                        <img src={projects[0].image_path}/>
                    </div>
                    <div className={styles.proj_content}>
                        <h1>{projects[0].title}</h1>
                        <h5>{projects[0].platform}</h5>
                        <h6>{projects[0].code}</h6>
                        <div className={styles.proj_links}>
                            {
                                projects[0].github.length > 0 && <a href={projects[0].github}>Source Code</a>
                            }
                            <a href={projects[0].link}>Landing Page</a>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.image}>
                        <img src={projects[1].image_path}/>
                    </div>
                    <div className={styles.proj_content}>
                        <h1>{projects[1].title}</h1>
                        <h5>{projects[1].platform}</h5>
                        <h6>{projects[1].code}</h6>
                        <div className={styles.proj_links}>
                            {
                                projects[1].github.length > 0 && <a href={projects[0].github}>Source Code</a>
                            }
                            <a href={projects[1].link}>Landing Page</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <a href="./projects" className={styles.button}>
                <div>
                    <p>Show all projects</p>
                </div>
            </a>
        </div>
    )
}