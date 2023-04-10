import React from 'react';
import { useDispatch } from 'react-redux';
import { Detail } from '../component/Detail/Detail';
import styles from "./CreateRecipe.module.css"

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const [state, setState] = React.useState({
        name: '',
        Image: '',
        Diets: '',
        Resume: '',
        HealthSkill: 0,
        steps: '',

    });
    const [error, setError] = React.useState({ len: false, num: false })
    const changeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });

        if (event.target.name === "name" || event.target.name === "pais") {
            if (event.target.value.length > 30) {
                setError({ ...error, len: true });
            } else {
                setError({ ...error, len: false });
            }
        }

        if (event.target.name === "HealthSkill") {
            if (event.target.value < 0) {
                setError({ ...error, num: true });
            } else {
                setError({ ...error, num: false });
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error.num === true || error.len === true) {
            return
        }
        else {
            console.log(state)

        }
    };


    const recipe = {
        title: <input className={styles.Input}
            type="text"
            name="name"
            value={state.name}
            onChange={changeHandler}
            placeholder='write here'
        />,
        imagen: <input className={styles.Input}
            type="text"
            name="Image"
            value={state.Image}
            onChange={changeHandler}
            placeholder='write here'
        />,
        diets: <input className={styles.Diets}
            type="text"
            name="Diets"
            value={state.Diets}
            onChange={changeHandler}
            placeholder='write here'
        />,
        healthskil: <input className={styles.Input}
            type="number"
            name="HealthSkill"
            value={state.HealthSkill}
            onChange={changeHandler}
            placeholder='write here'
        />,
        steps: <textarea className={styles.Input}
            type="text"
            name="steps"
            value={state.steps}
            onChange={changeHandler}
        />,
        resumen: <textarea className={styles.Input}
            name="Resume"
            value={state.Resume}
            onChange={changeHandler}
            placeholder='write here'
        />,
        send: <button type="submit">Create Recipe</button>

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Detail recipe={recipe} />

            </form>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <label>Name: <input
        //         type="text"
        //         name="name"
        //         value={state.name}
        //         onChange={changeHandler}
        //     />
        //     </label>
        //     {error.len === true && <p>Name</p>}
        //     <label>Image: <input
        //         type="text"
        //         name="Image"
        //         value={state.Image}
        //         onChange={changeHandler}
        //     />
        //     </label>

        //     <label>
        //         Diets: <input
        //             type="text"
        //             name="Diets"
        //             value={state.Diets}
        //             onChange={changeHandler}
        //         />
        //     </label>

        //     <label>
        //         Resume: <textarea
        //             name="Resume"
        //             value={state.Resume}
        //             onChange={changeHandler}
        //         />
        //     </label>

        //     <label>
        //         Health Skill: <input
        //             type="number"
        //             name="HealthSkill"
        //             value={state.HealthSkill}
        //             onChange={changeHandler}
        //         />
        //     </label>
        //     {error.num === true && <p>El healskill debe ser mayor a 0</p>}

        //     <label>
        //         steps: <textarea
        //             type="text"
        //             name="steps"
        //             value={state.steps}
        //             onChange={changeHandler}
        //         />
        //     </label>

        //     <button type="submit">Create Recipe</button>
        // </form>
    );
}



export default CreateRecipe;
