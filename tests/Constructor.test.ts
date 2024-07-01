describe('Constructor', () => {
    class Person {
        readonly id: number;
        name: string;
        age?: number;
        address: string = 'Unknown'; // * Properties bisa memilkiki default value dan tidak wajib di isi

        // Cara Membuat constructornya
        constructor(id: number, name: string) {
            this.id = id; // initiate
            this.name = name; // initiate
        }
    }
    it('should support constructor', () => {
        const person: Person = new Person(1122, 'Nurdin');

        person.age = 20;

        console.log(person.id);
        console.log(person.name);

        console.log(person);
    });
});
