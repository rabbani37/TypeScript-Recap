

// union = |
type UserRole = 'user' | 'menager' | 'admin';

const getDashbord = (role: UserRole) => {
    if (role === "admin" || role === "menager") {
        return 'Admin Dashbord'
    }
    else {
        return "Guest Dashbord"
    }
}
console.log(getDashbord("user"));



// intersection = &

type User = {
    id: number;
    name: string;
    department: string
}
type Role = {
    role: "Admin" | "User";
}

type Employee = User & Role;

const emply: Employee = {
    id: 23,
    name: "Rafi jaman",
    department: "IT",
    role: "User"
}