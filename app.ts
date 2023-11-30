function LoggerAndReturn<T>(thing: T) : T { 
    return thing;
}

//const message: string = LoggerAndReturn<string>('Hello World');
const message: string = LoggerAndReturn('Hello World!!!');
console.log(message);
