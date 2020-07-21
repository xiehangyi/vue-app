function buildName(firstName, lastName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName(undefined, 'Tom');
