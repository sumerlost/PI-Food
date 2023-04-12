import React from 'react';
import { useDispatch } from 'react-redux';
import { postrecipe } from '../Redux/actions/postrecipe';
import HandlerError from '../Handlers/HandlerErrors';

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const [recipe, setRecipe] = React.useState({
        title: '',
        imagen: '',
        diets: ["gluten free"],
        resumen: '',
        healthskil: 0,
        steps: '',

    });
    const [error, setError] = React.useState({ title: false, healthskil: false, resumen: false, diets: false })


    const handleSubmit = (event) => {
        event.preventDefault();
        if (error.num === true || error.len === true) {
            console.log(error)
            return
        }
        else {
            dispatch(postrecipe(recipe))

        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Title: <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
            />
            </label>
            {error.len === true && <p>Name</p>}
            <label>imagen: <input
                type="text"
                name="imagen"
                value={recipe.imagen}
                onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
            />
            </label>

            <label>
                Diets: <input
                    type="text"
                    name="diets"
                    value={recipe.diets}
                    onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                />
            </label>

            <label>
                Resume: <textarea
                    name="resumen"
                    value={recipe.resumen}
                    onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                />
            </label>

            <label>
                Health Skill: <input
                    type="text"
                    name="healthskil"
                    value={recipe.healthskil}
                    onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                />
            </label>
            {error.num === true && <p>El healskill debe ser mayor a 0</p>}

            <label>
                steps: <textarea
                    type="text"
                    name="steps"
                    value={recipe.steps}
                    onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                />
            </label>

            <button type="submit">Create Recipe</button>
        </form>
    );
}



export default CreateRecipe;
