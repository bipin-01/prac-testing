import { isValidEmail } from "./validateEmail"
type User = {
    firstName: string;
    lastName: string;
    email: string;
}

export function createUser(firstName: string, lastName:string, email: string): User {
    
    isValidEmail(email);
    return { firstName, lastName, email}
}

export function saveUser(user:User): void{
    console.log(`User ${user.firstName} ${user.lastName} ${user.email} saved`)
}

// const newUser = createUser('John','Doe', 'Johndoe@gmail.com')
// saveUser(newUser)
