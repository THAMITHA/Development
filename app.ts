function LoggerAndReturn<T>(thing: T) : T { 
    return thing;
}

const message:string=LoggerAndReturn<string>('Hello World');
console.log(message);
