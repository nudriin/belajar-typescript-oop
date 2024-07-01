describe('Method', () => {
    class Person {
        readonly id: number;
        name: string;

        constructor(id: number, name: string) {
            this.id = id; // initiate
            this.name = name; // initiate
        }

        // Cara membuat method pada class
        // tidak menggunakan kata kunci function
        sayHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        sayHi(): void {
            console.log(`Hello ${this.name}`);
        }
    }
    it('should support method', () => {
        const person: Person = new Person(1, 'Nurdin');

        person.sayHello('Nurdin');
        person.sayHi();
    });
});
