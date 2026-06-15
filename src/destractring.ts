// Object destractring
const users = {
    uid: 101,
    name: {
        firstName: "Rahim",
        middleName: "Uddin",
        lastName: "Karim"
    },
    gender: "mal",
    age: 25,
    isMarrid: false,
    favouriteColor: "red"
}

// Problem: find 'age' as userAge and also find 'middlename'

const { age: userAge, name: { middleName } } = users; // Solution 




// Array destractring

const friends = ["Rashen", "Jahid", "Ripon", "Kobir"];

// Problem: Please find 'Ripon' as thirdFriend
const [firstFriend, , thirdFriend] = friends; // Solution

console.log(thirdFriend);
