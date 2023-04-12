import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const MasterRecipes = () => {


    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    const len = useSelector(state => state.len)
    const type = useSelector(state => state.type)

}