"use strict";
exports.__esModule = true;
exports.getName = void 0;
function getName(user) {
    var Student = /** @class */ (function () {
        function Student(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + ' * ' + this.lastName;
        }
        return Student;
    }());
    var student = new Student(user.firstName, user.lastName);
    return student.fullName;
}
exports.getName = getName;
