import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";
import { getfilters } from "../../Redux/actions/getfilters";
import { HandlerDiets } from "../../Handlers/Handlerdiets";
import { GET_ALL_RECIPES, GET_RECIPE_NAME } from "../../Redux/actions/types";
import { getRecipeName } from "../../Redux/actions/getrecipename";

export const Filter = () => {

    const dispatch = useDispatch()
    const type = useSelector(state => state.type)
    const Diets = useSelector(state => state.diets)
    const filtros = HandlerDiets(Diets)
    const [toggleDiets, setToggleDiets] = useState(filtros)
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


    if (Diets) {
        return (
            <div>
                {Diets.map((element) => {
                    return <button onClick={() => handlertoggle(element)}>{element}</button>
                })}
            </div>
        )
    }
}