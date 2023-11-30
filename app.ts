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

function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}


let myNumArr = getArray<number>([100,200,300]);
let myStrArr = getArray<string>(['Hello', 'World']);

console.log(myNumArr);
console.log(myStrArr);