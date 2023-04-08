import React from "react";
import styles from "./InfoDetail.module.css"

export const InfoDetail = ({ recipe }) => {
    console.log(recipe)
    if (recipe) {
        return (
            <div className={styles.Workplace}>
                <div className={styles.Info}>
                    <div className={styles.InfoName}>
                        <h2 className={styles.Name}>{recipe.title}</h2>
                    </div>
                    <div className={styles.Data1}>
                        <h3 className={styles.InfoData1}>{recipe.code}</h3>
                        <h3 className={styles.InfoData1}>{recipe.healthskil + "%"}</h3>
                    </div>
                    <div className={styles.Data1}>
                        {recipe.diets ? <h3 className={styles.InfoData2}> {recipe.diets.join(", ")}</h3> : ""}
                    </div>
                </div>
                <div className={styles.Steps}>
                    <h4>{recipe.steps}</h4>
                </div>
            </div>
        )
    }
}