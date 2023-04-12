import axios from "axios"
import { recipepost } from "./endpoints"
import { POST_RECIPE } from "./types"

export const postrecipe = (recipe) => {

    return async function (dispatch) {
        try {
            console.log(recipe)
            const response = await axios.post(recipepost, { recipe })
            dispatch({ type: POST_RECIPE, payload: response.data })

        } catch (error) {
            console.log(error.message)
        }
    }
}