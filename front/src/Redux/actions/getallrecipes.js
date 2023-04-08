import axios from "axios"
import { allrecipes } from "./endpoints"
import { GET_ALL_RECIPES } from "./types"
import store from "../store/index"

export const getAllRecipes = (page) => {
    return async function (dispatch) {
        try {
            const filters = store.getState().filters
            const storeorder = store.getState().order
            let order = ""
            if (!storeorder.hasOwnProperty("order")) {
                order = "&order=none"
            }
            else {

                order = "&order=" + storeorder.order + "&ord=" + storeorder.ord
            }
            if (filters.length === 0) {
                filters.push("none")
            }
            let aux = ""
            for (let e of filters) {
                aux += "&filtros=" + e
            }


            const response = await axios.get(allrecipes(page, aux, order))
            console.log(allrecipes(page, aux, order))
            dispatch({ type: GET_ALL_RECIPES, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}

