import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";
import { getfilters } from "../../Redux/actions/getfilters";
import { HandlerDiets } from "../../Handlers/Handlerdiets";
import { GET_ALL_RECIPES, GET_RECIPE_NAME } from "../../Redux/actions/types";
import { getRecipeName } from "../../Redux/actions/getrecipename";
import { getOrders } from "../../Redux/actions/getorders"
import styles from "./ButtonFilter.module.css"

export const Filter = () => {

    const dispatch = useDispatch()
    const type = useSelector(state => state.type)
    const Diets = useSelector(state => state.diets)
    const filtros = HandlerDiets(Diets)
    const [toggleDiets, setToggleDiets] = useState(filtros)
    const [typeorden, setTypeOrden] = useState("none")
    const search = useSelector(state => state.search)


    const handlertoggle = (key) => {
        for (let element in toggleDiets) {
            if (key === element) {
                setToggleDiets({ ...toggleDiets, [element]: !toggleDiets[element] })

            }
        }
    }

    useEffect(() => {
        const filtro = []
        for (let key in toggleDiets) {
            if (toggleDiets[key] === true) {
                filtro.push(key)
            }
        }
        if (filtro.length === 0) {
            filtro.push("none")
        }

        dispatch(getfilters(filtro))
        if (type === GET_ALL_RECIPES) dispatch(getAllRecipes(1))
        else if (type === GET_RECIPE_NAME) dispatch(getRecipeName(search, 1))
    }, [toggleDiets])

    const hanlderorder = ({ value }) => {
        dispatch(getOrders(typeorden, value))
        dispatch(getAllRecipes(1))
    }

    if (Diets) {
        return (
            <div className={styles.Esqueleto}>
                <div className={styles.ButtonFilter}>

                    {Diets.map((element, index) => {
                        return <button key={index} onClick={() => handlertoggle(element)}>{element}</button>
                    })}
                </div>
                <select name="typeorden" id="typeorden" defaultValue="none" onChange={(event) => setTypeOrden(event.target.value)}>
                    <option value="hs">Health Score</option>
                    <option value="name">Alphabetic</option>
                    <option value="none">None</option>
                </select>
                <select name="orden" id="orden" defaultValue="none" onChange={(event) => { hanlderorder(event.target) }}>
                    <option value="asc">Ascendant</option>
                    <option value="des">Descendant</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}