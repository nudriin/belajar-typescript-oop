describe('Parameter Properties', () => {
    class Person {
        // * name disini akan jadi field
        constructor(
            private name: string,
            public age: number
        ) {
            this.name = name;
            this.age = age;
        }

        getName(): string {
            return this.name;
        }

        getAge(): number {
            return this.age;
        }
    }

    it('should support parameter properties', () => {
        const person: Person = new Person('Nurdin', 20);
        console.log(person.getAge());
        console.log(person.getName());
    });
});
