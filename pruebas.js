const a = [{ name: ["hola", "mi", "amor"] }, { name: ["todo", "me", "duele"] }, { name: ["hola", "soy", "yo"] }]
const c = "hola"
const b = [].concat(...a.map((i) => { return i.name }))

const f = new Set(b)
const g = Array.from(f)

console.log(g)

