import { GET_SEARCH } from "./types"

export const getSearch = (value) => {
    return { type: GET_SEARCH, payload: value }
}