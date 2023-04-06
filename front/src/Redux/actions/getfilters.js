import { GET_FILTERS } from "./types";

export const getfilters = (array) => {
    return { type: GET_FILTERS, payload: array }
}
