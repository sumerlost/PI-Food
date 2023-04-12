import { postrecipe } from "../Redux/actions/postrecipe";

export const HandlerSubmit = (event, dispatch, recipe, error) => {
    const errors = Object.values(error)
    event.preventDefault();
    if (errors.includes(true)) {

        return
    }
    else {
        dispatch(postrecipe(recipe))

    }

};