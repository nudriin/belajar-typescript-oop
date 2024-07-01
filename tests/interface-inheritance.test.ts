describe('Interface Inheritance', () => {
    interface HasName {
        name: string;
    }

    interface HasSayHello {
        sayHello(name: string): String;
    }

    // class person wajib mengimplementasikan isi dari HasName dan HasSayHello
    class Person implements HasName, HasSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        sayHello(name: string): String {
            return `Hello ${name} my name is ${this.name}`;
        }
    }

    it('should support interface inheritance', () => {
        const person: Person = new Person('Nurdin');

        person.sayHello('Azka');
    });
});
