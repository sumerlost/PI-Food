import { GET_RECIPE_ID } from "./types";
import { recipeid } from "./endpoints";
import axios from "axios"

export const getRecipeId = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(recipeid(id))
            dispatch({ type: GET_RECIPE_ID, payload: response.data[0] })
        } catch (error) {
            console.log(error.message)
        }
    }

}