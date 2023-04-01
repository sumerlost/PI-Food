import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RECIPEID } from "../../Routes/Routes";


export const Card = ({ recipe }) => {

    return (
        <div>
            {recipe ? <Link to={RECIPEID(recipe.id)}><img src={recipe.imagen} alt="" /></Link> : console.log("no funco")}
        </div>
    )
}