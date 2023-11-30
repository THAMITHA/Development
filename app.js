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
console.log(myNumArr);
console.log(myStrArr);
