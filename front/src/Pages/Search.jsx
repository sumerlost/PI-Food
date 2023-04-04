import React, { useEffect } from "react";
import styles from "./Recipes.module.css"
import Header from "../component/Header/Header"
import NavBot from "../component/NavBar/NavBar";
import { Cards } from "../component/Contenedores/Cards"
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../Redux/actions/getallrecipes"


export const Search = () => {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipesname)

    useEffect(() => {
        dispatch(getAllRecipes(1))
    }, [])


    return (
        <div className={styles.Background}>
            <div className={styles.Header}> <Header /></div>
            <div className={styles.Pages}> <Cards recipes={recipes} /></div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
        </div>
    )
}