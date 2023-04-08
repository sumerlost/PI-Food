import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NavBar({ handler, len, type }) {
    const dispatch = useDispatch()
    const value = useSelector(state => state.search)
    const Buttons = handler(dispatch, len, type, value)
    return (
        <div>
            {Buttons.map(button => button)}
        </div>
    )
}