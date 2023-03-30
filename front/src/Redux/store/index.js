import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducer/reducer"

const Store = configureStore({ reducer: rootReducer })

export default Store