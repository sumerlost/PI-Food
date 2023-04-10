import React, { useEffect } from "react";
import styles from "./RecipeDetail.module.css"
import { InfoDetail } from "../component/InfoDetail/InfoDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../Redux/actions/getrecipeid"
import { Detail } from "../component/Detail/Detail";

export const RecipeDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipeId(id))
    }, [])

    const recipe = useSelector(state => state.recipes)
    return (
        // <div className={styles.Esqueleto}>
        //     <div className={styles.Main}>
        //         <div className={styles.Top}>
        //             <div className={styles.SiteImg}>
        //                 <img className={styles.Img} src={recipe.imagen} alt={recipe.title} />
        //             </div>
        //             <div className={styles.SiteInfo}>
        //                 <div className={styles.InfoDetail1}>
        //                     <h3 className={styles.Name}>Name: </h3>
        //                     <h3 className={styles.Title}>{recipe.title}</h3>
        //                 </div>
        //                 <div className={styles.InfoDetail2}>
        //                     <h4 className={styles.Info2}>Code: {recipe.code}</h4>
        //                     <h4 className={styles.Info2}>HealthSkill: {recipe.healthskil}%</h4>
        //                 </div>
        //                 <div className={styles.InfoDetail3}>
        //                     {recipe.diets ? <h4 className={styles.Diets}>Diets: {recipe.diets.join(", ")}</h4> : ""}
        //                 </div>
        //                 <div className={styles.Steps}>
        //                     <h3 className={styles.StepTitle}>Steps</h3>
        //                     <p className={styles.Step}>{recipe.steps}</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={styles.Bot}>
        //             <p>{recipe.resumen}</p>

        //         </div>
        //     </div>

        <div>
            <Detail recipe={recipe} />
        </div>)

}