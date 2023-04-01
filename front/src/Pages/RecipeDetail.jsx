import React from "react";
import styles from "./RecipeDetail.module.css"
import { InfoDetail } from "../component/InfoDetail/InfoDetail";

export const RecipeDetail = () => {
    return (
        <div className={styles.Esqueleto}>

            <div className={styles.MarginIzq}></div>
            <div className={styles.LadoImg}>
                <div className={styles.BorderImg}></div>
                <div className={styles.ImgDiv}>
                    <img className={styles.Img} src="https://spoonacular.com/recipeImages/782585-312x231.jpg" alt="" />
                </div>
            </div>

            <div className={styles.LadoInfo}>
                <InfoDetail />
            </div>
            <div className={styles.MarginDer}></div>

        </div>)

}