describe('Type cast', () => {
    class Animal {
        constructor(public name: string) {
            this.name = name;
        }
    }

    class Cat extends Animal {}

    class Kitten extends Cat {}

    it('should support typecast', () => {
        const sayHello = (animal: Animal): void => {
            /**
             * Ini adalah contoh yang benar
             */
            if (animal instanceof Kitten) {
                const kitten = animal as Kitten;
                console.log(`My kitten is ${kitten.name}`);
            } else if (animal instanceof Cat) {
                const cat = animal as Cat;
                console.log(`My cat is ${cat.name}`);
            } else {
                console.log(`My pet is ${animal.name}`);
            }
        };

        let animal: Animal = new Animal('Shiro');
        let nami: Kitten = new Kitten('Neko');
        let kuro: Cat = new Cat('Kuro');

        sayHello(animal);
        sayHello(nami);
        sayHello(kuro);
    });

    it('should support wrong typecast', () => {
        const sayHello = (animal: Animal): void => {
            /** Aturannya ketika melakukan pengecekan maka yang harus di cek terlebih dahulu adalah child paling bawah
             * Dalam kasus ini seharusnya kitten terlebih dahulu di cek
             * namun terbalik menjadi cat, maka ketika di print, kitten akan bernilai sebagai cat
             *
             */
            if (animal instanceof Cat) {
                const cat = animal as Cat;
                console.log(`My cat is ${cat.name}`);
            } else if (animal instanceof Kitten) {
                const kitten = animal as Kitten;
                console.log(`My kitten is ${kitten.name}`);
            } else {
                console.log(`My pet is ${animal.name}`);
            }
        };

        let animal: Animal = new Animal('Shiro');
        let nami: Kitten = new Kitten('Neko');
        let kuro: Cat = new Cat('Kuro');

        sayHello(animal);
        sayHello(nami);
        sayHello(kuro);
    });
});
