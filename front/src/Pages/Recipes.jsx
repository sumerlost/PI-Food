import React, { useEffect } from "react";
import styles from "./Recipes.module.css"
import Header from "../component/Header/Header"
import NavBar from "../component/NavBar/NavBar";
import { Cards } from "../component/Contenedores/Cards"
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../Redux/actions/getallrecipes"
import { HandleNav } from "../Handlers/Handlerecipes"


export const Recipes = () => {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    const len = useSelector(state => state.len)
    const type = useSelector(state => state.type)
    useEffect(() => {
        dispatch(getAllRecipes(1, undefined))
    }, [])

    return (
        <div className={styles.Background}>
            <div className={styles.Header}> <Header /></div>
            <div className={styles.Pages}> <Cards recipes={recipes} /></div>
            <div className={styles.NavBar}><NavBar handler={HandleNav} len={len} type={type} /></div>
        </div>
    )
}