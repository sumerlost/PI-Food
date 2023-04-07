import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function NavBar({ handler, len, type, value }) {
    const dispatch = useDispatch()
    const Buttons = handler(dispatch, len, type, value)
    return (
        <div>
            {Buttons.map(button => button)}
        </div>
    )
}