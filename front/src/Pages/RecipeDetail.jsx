import React, { useEffect } from "react";
import styles from "./RecipeDetail.module.css"
import { InfoDetail } from "../component/InfoDetail/InfoDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../Redux/actions/getrecipeid"

export const RecipeDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipeId(id))
    }, [])

    const recipe = useSelector(state => state.recipes)
    return (
        <div className={styles.Esqueleto}>

            <div className={styles.MarginIzq}></div>
            <div className={styles.LadoImg}>
                <div className={styles.BorderImg}></div>
                <div className={styles.ImgDiv}>
                    <img className={styles.Img} src={recipe.imagen} alt="" />
                </div>
            </div>

            <div className={styles.LadoInfo}>
                <InfoDetail recipe={recipe} />
            </div>
            <div className={styles.MarginDer}></div>

        </div>)

}