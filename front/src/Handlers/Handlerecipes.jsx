import { getRecipeName } from "../Redux/actions/getrecipename"
import { getAllRecipes } from "../Redux/actions/getallrecipes"
const type = "RECIPES"
const HandleSearchBar = (event, navigate, dispatch) => {
    if (event.key === "Enter") {
        navigate("/search")
        dispatch(getRecipeName(event.target.value))
    }
}

const HandleNav = (dispatch, len) => {
    const buttons = []
    const pages = Math.ceil(len / 9)
    for (let i = 1; i <= pages; i++) {
        buttons.push(<button onClick={() => dispatch(getAllRecipes(i))}>{i}</button>)
    }
    return buttons
}

export { type, HandleSearchBar, HandleNav }