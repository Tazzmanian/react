'use strict';

class Person {

    constructor(givenName, familyName) {
        this.givenName = givenName;
        this.familyName = familyName;
    }

    greetings() {
        return `Hi ${this.givenName}!`
    }

    getDescription() {
        return 'Test';
    }
}

class Student extends Person {

    constructor(givenName, familyName, major) {
        super(givenName, familyName);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` There major is ${this.major}`;
        }

        return description;
    }
}

const me = new Student('test', 'fasd', 'zxcv');
console.log(me, typeof me, me instanceof Person, me.greetings(), me.getDescription());
