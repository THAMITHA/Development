// // -----------generic String------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // function LoggerAndReturn<T>(thing: T) : T { 
// //     return thing;
// // }
// // //const message: string = LoggerAndReturn<string>('Hello World');
// // const message: string = LoggerAndReturn('Hello World!!!');
// // const message1: number = LoggerAndReturn(2);
// // console.log(message);
// // console.log(message1);
// // -----------Generic Array------------------------
// function getArray<T>(items: T[]): T[]{
//     return new Array<T>().concat(items);
// }
// let myNumArr = getArray([100,200,300]);
// let myStrArr = getArray(['Hello', 'World']);
// // let myNumArr = getArray<number>([100,200,300]);
// // let myStrArr = getArray<string>(['Hello', 'World']);
// console.log(myNumArr);
// console.log(myStrArr);
// // // ----compiler error-----
// // myNumArr.push('hello');
// // myStrArr.push(1);
// //mutiple type variables
// function getInfo<T, U>(id: T,name: U):void{
//     console.log(typeof id+ ',' +typeof name, ' getinfo');
// }
// getInfo<number, string>(1,'Jane');
// // generic with known generic type-----------
// function displayType<T>(id:T, name: string):void{
//     console.log(typeof id +', '+typeof name);
// }
// displayType<number>(2,'malik');
// class Customer{
//     firstName: string;
//     lastName: string;
//     constructor(fname: string, lname: string){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
// }
// function customerLogger<T extends Customer>(customer:T):void{
//     console.log(`${customer.firstName} ${customer.lastName}`);
// }
// let customer = new Customer('Jane', 'Doe');
// customerLogger(customer);
// // customerLogger(1);  //error 
// interface Pair<T,U>{
//     first:T;
//     second:U;
// }
// let p: Pair<String, number> = {first: '10k', second: 1000};
// console.log(p);
// const person: Pair<string,string> = {first: 'Jonny', second:'liver'};
// console.log(person);
// interface ElementChecker{
//     <T>(items: T[],toBeChecked:T, atIndex: number):boolean;
// }
// function checkElementAt<T>(
//     items: T[],
//     toBeChecked: T,
//     atIndex: number
// ):boolean{
//     return items[atIndex] == toBeChecked;
// }
// let checker: ElementChecker = checkElementAt;
// let items = [1,3,5,7];
// let b:boolean = checker<number>(items,5,1);
// console.log(b);
// let c:boolean = checker<number>(items,5,2);
// console.log(c);
//Interfaces describing indexables
// interface States<R>{
//     [state:string]:R;
// } 
// let s: States<boolean> = {enabled:true, maximized:false};
// console.log(s);
// console.log(s['maximized']);
// generic class------------------ 
// class GenericNumber<T>{
//     zerovalue: T;
//     add: (x:T,y:T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zerovalue=0;
// myGenericNumber.add=function(x,y){
//     return x +y;
// };
// // generic class with generic interface--------------
// interface Collection<T>{
//     add(t:T):void;
//     remove(t:T):void;
//     asArray():T[];
// }
// class List<T> implements Collection<T>{
//     private data: T[] = [];
//     add(t:T):void{
//         this.data.push(t);
//     }
//     remove(t:T):void{
//         let index = this.data.indexOf(t); 
//         if(index>-1){
//             this.data.splice(index,1);
//         }
//     }
//     asArray():T[]{
//         return this.data;
//     }
// }
// let numbers: Collection<number> = new List();
// numbers.add(11);
// numbers.add(12);
// numbers.add(13);
// numbers.remove(12);
// let numArray = numbers.asArray();
// console.log(numArray);
//Decorator
// function log(target, key ,descriptor){
//     console.log(`${key} was called`);
// }
// class Calculator{
//     @log
//     square(n: number){
//         return n*n;
//     }
// }
//decorators
function log(title) {
    return function (target, key, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Call the original method
            var result = original.apply(this, args);
            // Log the call, and the result
            console.log("title:".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned\n              ").concat(JSON.stringify(result)));
            // Return the result
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Using the decorator @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    ;
    __decorate([
        log('calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
// square with args [2] returned 4
calculator.square(2);
// square with args [3] returned 9
calculator.square(3);
