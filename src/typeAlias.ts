

// Type Defind
type TUser = {
    uid: number;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    },
    gender: 'mal' | "femal";
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}





const user1: TUser = {
    uid: 1,
    name: {
        firstName: "abul",
        middleName: "uddin",
        lastName: "Kamal"
    },
    gender: "mal",
    contactNo: "+88012",
    address: {
        division: "Dhaka",
        city: "Minshigong"
    }
}





const user2: TUser = {
    uid: 2,
    name: {
        firstName: "Rahim",
        middleName: "uddin",
        lastName: "Habi"
    },
    gender: "mal",
    contactNo: "+88019",
    address: {
        division: "Dhaka",
        city: "Foridpur"
    }
}


console.log(user1);
console.log(user2);