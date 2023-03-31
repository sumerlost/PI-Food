import React from "react";
import styles from "./Cards.module.css"
import { Card } from "../Cards/Card"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";

export const Cards = ({ position }) => {

    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllRecipes())
    }, [])

    console.log(position)

    return (
        <div className={styles.Position}>
            <div className={styles.Size}><Card recipe={recipes[position]} /></div>
            <div className={styles.Size}><Card recipe={recipes[position + 1]} /></div>
            <div className={styles.Size}><Card recipe={recipes[position + 2]} /></div>
        </div>
    )
}