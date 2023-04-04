import axios from "axios"
import { allrecipes } from "./endpoints"
import { GET_ALL_RECIPES } from "./types"

export const getAllRecipes = (page) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(allrecipes(page))
            console.log(response.data)
            dispatch({ type: GET_ALL_RECIPES, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}

