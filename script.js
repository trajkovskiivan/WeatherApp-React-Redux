// console.log('hi')

// const user = {
//     id: 42,
//     dipsplayn
// }

// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// const obj2 = Object.assign({c: 4, d: 5}, obj1)
// console.log(obj2.c, obj2.d)


let names = ['bob', 'jull]', 'greg', 'john', 'anne']

let result = names.filter(x => x[0] === x[x.length - 1])
let second = result.reduce((res, cur) => res + " " + cur, "[") + "]";
console.log(result)
console.log(typeof (second))