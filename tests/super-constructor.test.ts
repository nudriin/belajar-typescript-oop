describe('Super Constructor', () => {
    // class person wajib mengimplementasikan isi dari HasName dan HasSayHello
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name); // * memanggil super constructor
            this.department = department;
        }
    }

    it('should support interface inheritance', () => {
        const person: Person = new Person('Nurdin');
        const employee: Employee = new Employee('Nurdin', 'IT');

        console.log(person);
        console.log(employee);
    });
});
