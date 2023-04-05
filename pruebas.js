
const a = { a: true, b: true, c: false }
const b = []
for (let key in a) {
    if (a[key] === true) {
        b.push(key)
    }
}
console.log(typeof b[0])

