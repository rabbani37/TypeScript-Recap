

const value:unknown = "This is our team";

const strValue = (value as string).length



let data: unknown = "Golam Rabbani";

let userName = data as string;
console.log(userName);

// Problem-1: Use type assertion to store the value in a variable named num and print it.
let value1: unknown = 100;
const num = value1 as number
console.log(num);