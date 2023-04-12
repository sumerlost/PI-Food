import React from "react";
import styles from "./Cards.module.css"
import { Card } from "../Cards/Card"

export const Cards = ({ recipes }) => {
    return (
        <div>
            <div className={styles.Cards}>
                <div className={styles.SizeCard}><Card recipe={recipes[0]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[1]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[2]} /></div>
            </div>
            <div className={styles.Cards}>
                <div className={styles.SizeCard}><Card recipe={recipes[3]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[4]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[5]} /></div>
            </div>
            <div className={styles.Cards}>
                <div className={styles.SizeCard}><Card recipe={recipes[6]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[7]} /></div>
                <div className={styles.SizeCard}><Card recipe={recipes[8]} /></div>
            </div>

        </div>
    )

}