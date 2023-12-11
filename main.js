console.log("-----1-----")
// დავალება 1
const replaceFunct = (value, valueToReplace, valueToReplaceWith) =>{
    let result = "";
    if(value.includes(valueToReplace)){
        let index=value.indexOf(valueToReplace);
        let arr = value.split("");
        arr.splice(index, valueToReplace.length, valueToReplaceWith);
        result = arr.join("");
        return `result = ${result}`;
    }
    return "Value doesn't includes given string"
}
// test
console.log(replaceFunct("Hello", "T", "World"));
console.log(replaceFunct("He o", " ", "ll"));
console.log(replaceFunct("Hello", "ell", "World"));

console.log("-----2-----")
// დავალება 2
const capitalizeSentence = (sentence) =>{
    return sentence.split(" ").map(el => el[0].toUpperCase()+el.slice(1)).join(" ")
}  
// test
console.log(capitalizeSentence("hello there, my name is john"));


console.log("-----3-----")
// დავალება 3
let userArr = [
    {
        fName: 'Lasha', 
        age: 30
    },
    {
        fName: 'Saba', 
        age: 20
    },
    {
        fName: 'Nia', 
        age: 28,
    }
]
const sortByAge = (arr) => {
    let age =arr[0].age;
    for(el of arr){
        arr.sort((el)=> el.age-age);
        age = el.age
    }
    return arr;
}
// test
console.log(sortByAge(userArr));


console.log("**********************")
