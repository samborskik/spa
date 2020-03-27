names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        const startsWithLetter = names.filter((name) => name.startsWith(letter));
        return startsWithLetter
    }

    sort() {
       return this.names.sort();
        
    }

    get() {
        return this.names
    }

    getFirst(n) {
        return this.names.slice(0, n);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.get());
console.log(students.getFirst(2).sort());



