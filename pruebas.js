let palabras = ["manzana", "banana", "naranja", "kiwi"];

const asc = (a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}


palabras.sort((a, b) =>
    asc(a, b)

);

console.log(palabras); // ["banana", "kiwi", "manzana", "naranja"]
const b = { b: "a" }
console.log(b.hasOwnProperty("b"))