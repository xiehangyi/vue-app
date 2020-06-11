export function getName (user) {
  class Student {
    fullName: string;
    constructor (public firstName: string, public lastName: string) {
      this.fullName = this.firstName + ' * ' + this.lastName
    }
  }
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  let student = new Student(user.firstName, user.lastName)
  return student.fullName
}
