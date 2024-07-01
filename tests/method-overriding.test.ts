describe('Method Overriding', () => {
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
    it('should support method overriding', () => {
        const employee: Employee = new Employee('Jakara');
        const manager: Manager = new Manager('Nurdin');

        employee.sayHello('Azka');
        manager.sayHello('Azka');

        employee.sayHi('Azko');
        manager.sayHi('Azko');
    });
});
