const pasos = [{ number: 1, step: "primero" }, { number: 2, step: "segundo" }, { number: 3, step: "tercero" }, { number: 4, step: "cuarto" }, { number: 5, step: "quinto" }]
//const b = [].concat(...a.map((i) => { return i.name }))
var string = ""
for (let e of pasos) {
    string += e.step
}

console.log(string)


