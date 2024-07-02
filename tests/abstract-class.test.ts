describe('Abstract Class', () => {
    abstract class Customer {
        readonly id: number; // ini tidak perlu di implement
        abstract name: string; // abstract propertiest

        // ini juga sudah ada implementasinya karena dan bisa dipanggil dari child class nya
        constructor(id: number) {
            this.id = id;
        }

        // abstract method
        abstract sayHi(name: string): void;
    }

    // wajib implementasi abstract class nya
    class RegularCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }
        sayHi(name: string): void {
            throw new Error('Method not implemented.');
        }
    }

    it('should support abstract class', () => {
        const customer: Customer = new RegularCustomer(1122, 'Naruto');
        console.log(customer);
    });
});
