import React, { useEffect } from "react";
import styles from "./Recipes.module.css"
import Header from "../component/Header/Header"
import { Confilascards } from "../component/Contenedores/Confilascards";


export const Recipes = () => {


    return (
        <div className={styles.Background}>
            <div className={styles.Header}> <Header /></div>
            <div className={styles.Pages}> <Confilascards /></div>
        </div>
    )
}