import React, { useEffect } from "react";
import styles from "./Recipes.module.css"
import Header from "../component/Header/Header"
import NavBar from "../component/NavBar/NavBar";
import { Cards } from "../component/Contenedores/Cards"
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../Redux/actions/getallrecipes"
import { HandleSearchBar, type, HandleNav } from "../Handlers/Handlerecipes"


export const Recipes = () => {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    const len = useSelector(state => state.len)
    useEffect(() => {
        dispatch(getAllRecipes(1, undefined))
    }, [])

    return (
        <div className={styles.Background}>
            <div className={styles.Header}> <Header handler={HandleSearchBar} type={type} /></div>
            <div className={styles.Pages}> <Cards recipes={recipes} /></div>
            <NavBar handler={HandleNav} len={len} />
        </div>
    )
}