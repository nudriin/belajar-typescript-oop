describe('Polymorphism', () => {
    class Animal {
        constructor(public name: string) {
            this.name = name;
        }

        // * Method polymorphism
        sayhello(obj: Animal): void {
            console.log(`Hello ${obj.name}`);
        }
    }

    class Cat extends Animal {}

    class Kitten extends Cat {}

    class Employee {
        constructor(public name: string) {
            this.name = name;
        }
    }

    it('should support polymorphism', () => {
        let kitten: Animal = new Animal('Kuro');
        console.log(kitten);

        kitten = new Cat('Kuro Nami');
        console.log(kitten);

        kitten = new Kitten('Cikko');
        console.log(kitten);

        // bisa berubah bentu menjadi new kitten meskipun typenya adalah Animal
        let nami: Animal = new Kitten('Neko');
        console.log(nami);

        let kuro: Animal = new Animal('Kuro');
        kuro.sayhello(nami);
        kuro.sayhello(kitten);
    });
});
