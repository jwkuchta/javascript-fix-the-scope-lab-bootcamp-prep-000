console.log(Object.keys([1, 2, 3, 4]))


const myHash = {a: "lala", b: 43, c: true}

console.log(Object.keys(myHash))
console.log(Object.entries(myHash))
console.log(Object.getOwnPropertySymbols(myHash))

var arr = ["under", "the", "hood"];

arr[0];  // "under"
arr['0']; // "under"
arr[02]; // 02 the number *is* 2, so you get "hood"
console.log(arr['2'])// '02' the string is *not* 2, so you get undefined
arr["string"] = "stringentry"

console.log(arr)
