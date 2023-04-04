import React from "react";
import styles from "./Header.module.css"
import { getRecipeName } from "../../Redux/actions/getrecipename"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../SideBar/Sidebar";


export default function Header({ handler, type }) {
    const eventName = type === "RECIPES" ? 'onKeyUp' : 'onChange';
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className={styles.Main}>
            <div className={styles.SizeBar}>
                <input className={styles.SearchBar} {...{ [eventName]: (event) => handler(event, navigate, dispatch) }}></input>
                <div><Sidebar /></div>
            </div>
        </div>
    )
}