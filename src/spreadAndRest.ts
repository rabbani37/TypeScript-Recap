

const friends: string[] = ["Rahim", "Karim"];

const schoolFriends: string[] = ["pintu", "chintu", "mintu"];

const collegeFriends: string[] = ["Rashen", "Sajid", "Asif"];

const totalFriends: string[] = [...friends, ...schoolFriends, ...collegeFriends];


console.log(totalFriends);


const restFriends = (...friends: string[]): void => {
    console.log(friends);
    friends.forEach(f => {
        console.log(f);
    })
}
restFriends("Rahim", "Karim", "Rashed", "Sajid")
console.log();