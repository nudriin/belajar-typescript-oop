describe('Inheritance', () => {
    // Parrent
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
        type: string;

        constructor(name: string, type: string) {
            super(name); //cara memanggil super constructornya
            this.type = type;
        }

        getName(): string {
            return this.name;
        }

        getType(): string {
            return this.type;
        }
    }

    class Director extends Manager {
        directorId: number;
        constructor(name: string, type: string, directorId: number) {
            super(name, type); //cara memanggil super constructornya
            this.directorId = directorId;
        }
    }
    it('should support inheritance', () => {
        const employee: Employee = new Employee('Sakura');
        const manager: Manager = new Manager('Nurdin', 'Top Manager');
        const director: Director = new Director('Samurai', 'Director', 2211);

        console.log(employee);
        console.log(manager);
        console.log(director);
    });
});
