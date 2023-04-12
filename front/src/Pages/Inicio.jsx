import React from "react";
import styles from "./Inicio.module.css"
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div className={styles.Background}>
            <div className={styles.Main}>
                <div className={styles.TitlePosition}>
                    <h1 className={styles.Title}> My Recipes</h1>
                </div>
                <div className={styles.ButtonPosition}>

                    <Link to={"/recipes"}><button>Home</button></Link>
                </div>
            </div>
        </div>
    )
}
