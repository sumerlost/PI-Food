import axios from "axios"
import { allrecipes } from "./endpoints"
import { GET_ALL_RECIPES } from "./types"

export const getAllRecipes = async () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(allrecipes)
            dispatch({ type: GET_ALL_RECIPES, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }

    }
}

