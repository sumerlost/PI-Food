const regeximage = /^https:\/\/i\.pinimg\.com\/.*\.jpg$/;
const regexname = /^[A-Z]/;
const regexhs = /^[0-9]+$/;

const HandlerError = (event, recipe, setRecipe, error, setError) => {
    console.log(error)
    setRecipe({
        ...recipe,
        [event.target.name]: event.target.value
    });

    if (event.target.name === "title") {
        if (event.target.value.length === 0 || !regexname.test(event.target.value)) {
            setError({ ...error, title: true });
        } else {
            setError({ ...error, title: false });
        }
    }

    if (event.target.name === "healthskil") {
        if (event.target.value < 0 || event.target.value > 100 || !regexhs.test(event.target.value)) {
            setError({ ...error, healthskil: true });
        } else {
            setError({ ...error, healthskil: false });
        }
    }
    if (event.target.name === "imagen") {
        if (!regeximage.test(event.target.value)) {
            setError({ ...error, imagen: true });
        } else if (event.target.value.length === 0) {
            setError({ ...error, imagen: false });
        }
        else {
            setError({ ...error, imagen: false });
        }
    }
    if (event.target.name === "resumen") {
        if (event.target.value.length === 0) {
            setError({ ...error, resumen: true });
        } else {
            setError({ ...error, resumen: false });
        }
    }
    if (event.target.name === "steps") {
        if (event.target.value.length === 0) {
            setError({ ...error, steps: true });
        } else {
            setError({ ...error, steps: false });
        }
    }
};

export default HandlerError