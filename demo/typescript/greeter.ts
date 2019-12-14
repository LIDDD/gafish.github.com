class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = this.firstName + this.lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = { firstName: "Jane", lastName: "User" };
let user = new Student('Jane', 'User')

document.body.innerHTML = greeter(user);