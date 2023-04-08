import { GET_ORDERS } from "./types";

export const getOrders = (order, ord) => {
    return { type: GET_ORDERS, payload: { order, ord } }
}