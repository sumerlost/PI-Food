import { GET_RECIPE_NAME } from "./types";
import { recipename } from "./endpoints";
import axios from "axios";

export const getRecipeName = (string) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(recipename(string))
            console.log(response.data)
            dispatch({ type: GET_RECIPE_NAME, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}
