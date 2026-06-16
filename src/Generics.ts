


// dynamic generic 



type Generic<T> = Array<T>

// const friends: string[] = ["friend-1", "friends-2", "friends-3", "friends-4"];
const friends: Generic<string> = ["friend-1", "friends-2", "friends-3", "friends-4"];

// const rolenumber: number[] = [12, 23, 34, 56]
const rolenumber: Generic<number> = [12, 23, 34, 56]

const isElligableList: Generic<boolean> = [true, false, false, true]
// const isElligableList: boolean[] = [true, false, false, true]

const sqrFunc = (value: number) => {
    return value * value;
}
console.log(sqrFunc(4));
















