const HandlerError = (event, recipe, setRecipe, error, setError) => {
    console.log(recipe, error)
    setRecipe({
        ...recipe,
        [event.target.name]: event.target.value
    });

    if (event.target.name === "name") {
        if (event.target.value.length > 30) {
            setError({ ...error, len: true });
        } else {
            setError({ ...error, len: false });
        }
    }

    if (event.target.name === "healthskil") {
        if (event.target.value < 0 || event.target.value > 100) {
            setError({ ...error, num: true });
        } else {
            setError({ ...error, num: false });
        }
    }
};

export default HandlerError