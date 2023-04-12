import React, { useEffect } from "react";
import styles from "./RecipeDetail.module.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeId } from "../Redux/actions/getrecipeid"
import { Detail } from "../component/Detail/Detail";

export const RecipeDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipeId(id))
    }, [])

    const recipe = useSelector(state => state.recipes)
    return (

        <div>
            <Detail recipe={recipe} />
        </div>)

}