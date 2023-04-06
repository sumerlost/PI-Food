import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";
import { getfilters } from "../../Redux/actions/getfilters";
import { HandlerDiets } from "../../Handlers/Handlerdiets";

export const Filter = () => {

    const dispatch = useDispatch()
    const Diets = useSelector(state => state.diets)
    const filtros = HandlerDiets(Diets)
    const [toggleDiets, setToggleDiets] = useState(filtros)
    console.log(Diets)

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
        dispatch(getAllRecipes(1))
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