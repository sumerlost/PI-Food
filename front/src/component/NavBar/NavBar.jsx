import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function NavBar({ handler, len }) {
    const dispatch = useDispatch()
    const Buttons = handler(dispatch, len)
    return (
        <div>
            {Buttons.map(button => button)}
        </div>
    )
}