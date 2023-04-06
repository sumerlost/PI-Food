import axios from "axios"
import { allrecipes } from "./endpoints"
import { GET_ALL_RECIPES } from "./types"
import store from "../store/index"

export const getAllRecipes = (page) => {
    return async function (dispatch) {
        try {
            const filters = store.getState().filters
            if (filters.length === 0) {
                filters.push("none")
            }
            let aux = ""
            for (let e of filters) {
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

