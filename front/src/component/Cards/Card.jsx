import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RECIPEID } from "../../Routes/Routes";
import styles from "./Card.module.css"

export const Card = ({ recipe }) => {

    if (recipe) {

        const diets = recipe.diets.map((element, index) => { return (<ul key={index} className={styles.Ul}>{element}</ul>) })

        return (
            <div className={styles.Esqueleto}>
                <Link to={RECIPEID(recipe.code)}><div className={styles.Top}>
                    <img className={styles.Img} src={recipe.imagen} alt="" />
                    <div className={styles.Diets}>
                        <h4 className={styles.DietSub}>dietas</h4>
                        <div className={styles.List}>{diets.map(e => e)}</div>
                    </div>
                </div>
                    <div className={styles.Bot}>
                        <p>{recipe.title}</p>
                    </div></Link>
            </div>
        )
    }

}