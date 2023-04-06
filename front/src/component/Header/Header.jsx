import React from "react";
import styles from "./Header.module.css"
import { getRecipeName } from "../../Redux/actions/getrecipename"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../SideBar/Sidebar";
import { Filter } from "../Filters/ButtonFilter";

export default function Header({ handler, type }) {
    const Diets = useSelector(state => state.diets)
    const eventName = type === "RECIPES" ? 'onKeyUp' : 'onChange';
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className={styles.Main}>
            <div className={styles.SizeBar}>
                <input className={styles.SearchBar} {...{ [eventName]: (event) => handler(event, navigate, dispatch) }}></input>
                {Diets.length != 0 ? <div><Filter /></div> : console.log("funca")}
            </div>
        </div>
    )
}