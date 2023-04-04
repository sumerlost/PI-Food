import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RECIPEID } from "../../Routes/Routes";


export const Card = ({ recipe }) => {

    return (
        <div>
            {recipe ? <Link to={RECIPEID(recipe.code)}><img src={recipe.imagen} alt="" /></Link> : console.log("no funco")}
        </div>
    )
}