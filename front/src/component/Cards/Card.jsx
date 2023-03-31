import React from "react";


export const Card = ({ recipe }) => {

    console.log(recipe)
    return (
        <div>
            <img src={recipe.imagen} alt="" />
        </div>
    )
}