import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../Redux/actions/getallrecipes";

export const Filter = () => {
    const dispatch = useDispatch()

    const [toggleDiets, setToggleDiets] = useState({ "gluten%20free": false, "vegane": false, "primal": false })

    const handletoggle1 = () => {
        setToggleDiets({ ...toggleDiets, "gluten%20free": !toggleDiets["gluten%20free"] })
        const filtro = []
        for (let key in toggleDiets) {
            if (toggleDiets[key] === true) {
                filtro.push(key)
            }
        }
        dispatch(getAllRecipes(1, filtro))
    }
    const handletoggle2 = () => {
        setToggleDiets({ ...toggleDiets, "vegane": !toggleDiets["vegane"] })
        const filtro = []
        for (let key in toggleDiets) {
            if (toggleDiets[key] === true) {
                filtro.push(key)
            }
        }
        dispatch(getAllRecipes(1, filtro))
    }
    const handletoggle3 = () => {
        setToggleDiets({ ...toggleDiets, "primal": !toggleDiets["primal"] })
        const filtro = []
        for (let key in toggleDiets) {
            if (toggleDiets[key] === true) {
                filtro.push(key)
            }
        }
        dispatch(getAllRecipes(1, filtro))
    }

    return (
        <div>
            <button onClick={handletoggle1}>Button1</button>
            <button onClick={handletoggle2}>VEGANE</button>
            <button onClick={handletoggle3}>Button3</button>
        </div>
    )
}