import axios from "axios"
import { recipepost } from "./endpoints"
import { ERROR, POST_RECIPE } from "./types"


export const postrecipe = (recipe) => {

    return async function (dispatch) {
        try {
            const response = await axios.post(recipepost, { recipe })
            dispatch({ type: POST_RECIPE, payload: response.data })

        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data.error })
        }
    }
}