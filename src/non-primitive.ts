/**
 * 
 * Non-Primitive
 *  1. Object
 *  2. Array
 *  3. Function
 *  4. Tuple
 * 
 */

const bazarList: string[] = ["rich", "eggs", "oil"];
bazarList.push("3943")


const mixedArray: (string | number)[] = ['rich', 12, 'eggs', 13]
mixedArray.push("oil", 14);

const destination: [string, string, number] = ["Dhaka", "Khulna", 890]

// console.log(bazarList);
// console.log(mixedArray);

// console.log( destination);



// reference type Object

const name: {
    readonly firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    firstName: "Rahim",
    lastName: "Uddding",
    isMarried: false
}
