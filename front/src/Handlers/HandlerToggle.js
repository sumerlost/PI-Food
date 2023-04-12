export const HandlerToggle = (key, state, setState) => {
    for (let element in state) {
        if (key === element) {
            setState({ ...state, [element]: !state[element] })

        }
    }
}