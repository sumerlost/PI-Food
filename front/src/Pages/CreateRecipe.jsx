import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postrecipe } from '../Redux/actions/postrecipe';
import HandlerError from '../Handlers/HandlerErrors';
import styles from "./CreateRecipe.module.css"
import { getAllRecipes } from "../Redux/actions/getallrecipes"
import { Form } from '../component/Form/Form';

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const myerror = useSelector(state => state.myerror)
    const post = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getAllRecipes(1))
    }, [])

    const diets = useSelector(state => state.diets)



    return (

        <div>
            {diets.length !== 0 && <Form myerror={myerror} dispatch={dispatch} diets={diets} post={post} />}
        </div>
    );
}



export default CreateRecipe;
