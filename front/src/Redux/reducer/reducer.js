import { ERROR, GET_ALL_RECIPES, GET_FILTERS, GET_ORDERS, GET_RECIPE_NAME, GET_SEARCH, POST_RECIPE } from "../actions/types"
import { GET_RECIPE_ID } from "../actions/types"

const initialState = {
    recipes: [],
    diets: [],
    len: 0,
    filters: [],
    type: "",
    search: "",
    order: {},
    post: "",
    myerror: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipepage,
                diets: action.payload.diets,
                len: action.payload.len,
                type: GET_ALL_RECIPES

            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipes: action.payload,
                type: GET_RECIPE_ID
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: action.payload.recipepage,
                type: GET_RECIPE_NAME,
                len: action.payload.len,
                diets: action.payload.diets

            }
        case GET_FILTERS:
            return {
                ...state,
                filters: action.payload
            }

        case GET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case GET_ORDERS:
            return {
                ...state,
                order: action.payload
            }
        case POST_RECIPE:
            return {
                ...state,
                post: action.payload
            }
        case ERROR:
            return {
                ...state,
                myerror: action.payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer