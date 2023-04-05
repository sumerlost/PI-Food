import axios from "axios"
import { allrecipes } from "./endpoints"
import { GET_ALL_RECIPES } from "./types"

export const getAllRecipes = (page, filtros) => {
    return async function (dispatch) {
        try {
            let iter = []
            if (filtros === undefined) {
                iter.push("none")
            }
            else if (typeof filtros === "string") {
                iter.push(filtros)
            }
            else {
                iter = filtros
            }
            let aux = ""
            for (let e of iter) {
                aux += "&filtros=" + e
            }
            console.log(allrecipes(page, aux))
            const response = await axios.get(allrecipes(page, aux))
            dispatch({ type: GET_ALL_RECIPES, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}

