const a = [{ name: "hola" }, { name: "todp" }, { name: "hola" }]
const c = "hola"
const b = a.filter(e => e.name.includes(c)

)
console.log(b[0])