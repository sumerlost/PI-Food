import { GET_ALL_RECIPES, GET_FILTERS, GET_RECIPE_NAME } from "../actions/types"
import { GET_RECIPE_ID } from "../actions/types"

const initialState = {
    recipes: [],
    recipeid: [],
    recipesname: [],
    diets: [],
    len: 0,
    filters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipepage,
                diets: action.payload.diets,
                len: action.payload.len
            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipeid: action.payload
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipesname: action.payload,

            }
        case GET_FILTERS:
            return {
                ...state,
                filters: action.payload
            }

        default:
            return { ...state }
    }
}

export default rootReducer