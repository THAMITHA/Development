// -----------generic String------------------------
// function LoggerAndReturn<T>(thing: T) : T { 
//     return thing;
// }
// //const message: string = LoggerAndReturn<string>('Hello World');
// const message: string = LoggerAndReturn('Hello World!!!');
// const message1: number = LoggerAndReturn(2);
// console.log(message);
// console.log(message1);
// -----------Generic Array------------------------
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
// let myNumArr = getArray<number>([100,200,300]);
// let myStrArr = getArray<string>(['Hello', 'World']);
console.log(myNumArr);
console.log(myStrArr);
// // ----compiler error-----
// myNumArr.push('hello');
// myStrArr.push(1);
//mutiple type variables
function getInfo(id, name) {
    console.log(typeof id + ',' + typeof name, ' getinfo');
}
getInfo(1, 'Jane');
function displayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
displayType(2, 'malik');
