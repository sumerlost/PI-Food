import React from "react";
import styles from "./Header.module.css"
import { getRecipeName } from "../../Redux/actions/getrecipename"
import { useDispatch, useSelector } from "react-redux"
import { Filter } from "../Filters/ButtonFilter";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";
import { getSearch } from "../../Redux/actions/getsearch"
import { Link } from "react-router-dom"
import { CREATE } from "../../Routes/Routes";

export default function Header() {
    const Diets = useSelector(state => state.diets)

    const dispatch = useDispatch()

    const HanlderSearch = ({ value }) => {
        if (value.length === 0) {
            dispatch(getAllRecipes(1))
        }
        else if (value.length > 0) {
            dispatch(getSearch(value))
            dispatch(getRecipeName(value, 1))
        }

    }

    return (
        <div className={styles.Main}>
            {Diets.length !== 0 ? <div className={styles.Filter}><Filter /></div> : console.log("funca")}
            <div className={styles.SizeBar}>
                <input className={styles.SearchBar} onChange={(event) => { HanlderSearch(event.target) }}></input>
            </div>
            <div className={styles.CreateRecipe}>   <Link to={CREATE}><button>Create Recipe</button></Link></div>
        </div>
    )
}