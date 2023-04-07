

function A(a, b) {
    this.a = a
    this.b = b
}

const b = new A(1, 2)
console.log(b)

A.prototype.suma = function () {
    return this.a + this.b
}

console.log(b.suma())

const funcion = (value) => {
    let activador
    if (value.length === 1) {
        activador = 0
    }

}
var efe = []
if (!efe.length) {
    console.log("aca funca")
}