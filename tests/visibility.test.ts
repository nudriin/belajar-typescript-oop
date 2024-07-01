describe('Visibility', () => {
    // Pada typescript terdapat 3 visibility yaitu // * public, protected, private
    // public bisa diakses dimanapun (default)
    // protected bisa diakses class itu sendiri dan child class nya
    // private hanya bisa diakses class itu sendiri
    class Counter {
        // Hanya bisa diakses class ini sendiri
        private counter: number = 0;
        protected name: string; // bisa diakses oleh child classnya
        public age: number; // bisa diakses oleh public
        // * ini juga public secara default
        gender: string; // bisa diakses oleh public

        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        /**
         * incerement
         */
        public incerement(): void {
            this.counter++;
        }

        /**
         * getCount
         */
        public getCount(): number {
            return this.counter;
        }
    }

    class Child extends Counter {
        // public function secara default
        getName(): string {
            return this.name; // mengakses protected
        }
    }
    it('should support visibility', () => {
        const counter: Counter = new Counter('Counts', 20, 'He');
        const child: Child = new Child('Child', 30, 'He');

        counter.incerement();
        console.log(counter.getCount());

        counter.incerement();
        counter.incerement();
        console.log(counter.getCount());

        console.log(child.getName());
    });
});
