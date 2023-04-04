import { getRecipeName } from "../Redux/actions/getrecipename"

export const handlersearch = (event, dispatch) => {
    if (event.target.value.length === 1) {
        dispatch(getRecipeName(event.target.value))
    }

}