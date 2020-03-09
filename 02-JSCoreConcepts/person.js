class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return `${this.name} ${this.surname.toUpperCase()}`
    }

    initials() {
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`
    }
}

let x = new Person("Krzysztof", "Samborski")
console.log(x.fullName())
console.log(x.initials())
