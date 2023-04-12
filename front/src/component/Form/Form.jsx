import React, { useEffect, useState } from "react";
import HandlerError from "../../Handlers/HandlerErrors";
import styles from "./Form.module.css"
import { HandlerSubmit } from "../../Handlers/HandlerSubmit";
import { HandlerDiets } from "../../Handlers/Handlerdiets"
import { Checks } from "../../Helpers/Checks";
import { HandlerToggle } from "../../Handlers/HandlerToggle";
import { Link, useNavigate } from "react-router-dom";
import { RECIPES } from "../../Routes/Routes";
export const Form = ({ myerror, diets, dispatch, post }) => {

    const statediets = HandlerDiets(diets)

    const [recipe, setRecipe] = React.useState({
        title: '',
        imagen: '',
        diets: [],
        resumen: '',
        healthskil: 0,
        steps: '',

    });

    const [error, setError] = React.useState({ title: true, healthskil: true, resumen: true, steps: true, imagen: true })
    const [checks, setChecks] = useState(statediets)

    useEffect(() => {
        let recipediets = Checks(checks)
        setRecipe({ ...recipe, diets: recipediets })

    }, [checks])





    return (
        <div className={styles.Background}>
            <div className={styles.Main}>
                <form className={styles.Form} onSubmit={(event) => HandlerSubmit(event, dispatch, recipe, error, post, useNavigate)}>
                    <label className={styles.Label}>Title: <input
                        type="text"
                        name="title"
                        value={recipe.title}
                        onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                    />
                        {error.title && <p className={styles.Error}>Title can't be empty and the first letter must be capital</p>}
                    </label>
                    <label className={styles.Label}>imagen: <input
                        type="text"
                        name="imagen"
                        value={recipe.imagen}
                        onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                    />
                        {error.imagen && <p className={styles.Error}> only accept images of pinterest.com</p>}
                    </label>



                    <label className={styles.Label}>
                        Resume: <textarea
                            name="resumen"
                            value={recipe.resumen}
                            onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                        />
                        {error.resumen && <p className={styles.Error}>This field cannot be empty</p>}
                    </label>


                    <label className={styles.Label}>
                        Health Skill: <input
                            type="text"
                            name="healthskil"
                            value={recipe.healthskil}
                            onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                        />
                        {error.healthskil === true && <p className={styles.Error}>The item must be greater or equal to 0 and smaller to 100. Doesn't must have letters</p>}
                    </label>
                    {myerror.length !== 0 && <p>{myerror}</p>}

                    <label className={styles.Label}>
                        steps: <textarea
                            type="text"
                            name="steps"
                            value={recipe.steps}
                            onChange={(event) => HandlerError(event, recipe, setRecipe, error, setError)}
                        />
                        {error.steps && <p className={styles.Error}>This field cannot be empty</p>}
                    </label>
                    <label className={styles.Diets}>
                        {diets.map((e, index) => <label key={index}><input
                            type="checkbox"
                            name={e}
                            value={e}
                            onChange={() => {
                                HandlerToggle(e, checks, setChecks)
                            }}
                        />{e}</label>)}

                    </label>

                    <div className={styles.ButtonPosition}>
                        <button className={styles.Back}>{<Link to={RECIPES}>back</Link>}</button>
                        <button className={styles.Button} type="submit">Create Recipe</button>

                    </div>
                </form>
            </div>
        </div>
    );
}
