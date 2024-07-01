describe('Instanceof', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name} my name is ${this.name}`);
        }

        sayHi(name: string): void {
            console.log(`Hi ${name} my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        // method overriding
        sayHello(name: string): void {
            console.log(
                `Hello ${name} my name is ${this.name} im your manager`
            );
        }

        // * super method
        sayHi(name: string): void {
            super.sayHi(name); // * memanggil super method nya

            console.log('Im your manager');
        }
    }
    it('should support instanceof', () => {
        const azka: Employee = new Employee('Azka');
        const nurdin: Manager = new Manager('Nurdin');

        // instanceof ada pengecekan sebuah object berasal dari class apa
        expect(azka instanceof Employee).toBe(true);
        expect(azka instanceof Manager).toBe(true);
        expect(nurdin instanceof Employee).toBe(true);
        expect(nurdin instanceof Manager).toBe(true);
    });
});
