import { GET_RECIPE_NAME } from "./types";
import { recipename } from "./endpoints";
import axios from "axios";
import store from "../store/index"

export const getRecipeName = (string, page) => {
    return async function (dispatch) {
        try {
            const filters = store.getState().filters

            if (filters.length === 0) {
                filters.push("none")
            }
            const storeorder = store.getState().order
            let order = ""
            if (!storeorder.hasOwnProperty("order")) {
                order = "&order=none"
            }
            else {
                order = "&order=" + storeorder.order + "&ord=" + storeorder.ord
            }
            let aux = ""
            for (let e of filters) {
                aux += "&filtros=" + e
            }

            const response = await axios.get(recipename(string, page, aux, order))
            dispatch({ type: GET_RECIPE_NAME, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}
