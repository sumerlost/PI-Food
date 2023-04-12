import { getRecipeName } from "../Redux/actions/getrecipename"
import { getAllRecipes } from "../Redux/actions/getallrecipes"
import { GET_ALL_RECIPES, GET_RECIPE_NAME } from "../Redux/actions/types"



const HandleNav = (dispatch, len, type, value) => {
    const buttons = []
    const pages = Math.ceil(len / 9)
    for (let i = 1; i <= pages; i++) {
        if (type === GET_ALL_RECIPES) {
            buttons.push(<button key={i + 10000} onClick={() => dispatch(getAllRecipes(i))}>{i}</button>)
        }
        else if (type === GET_RECIPE_NAME) {
            buttons.push(<button key={i + 10000} onClick={() => dispatch(getRecipeName(value, i))}>{i}</button>)
        }
    }
    return buttons
}

export { HandleNav }