describe('Getter and Setter', () => {
    class Product {
        readonly id: number;
        _name: string;
        _qty: number;

        constructor(id: number, name: string, qty: number) {
            this.id = id;
            this._name = name;
            this._qty = qty;
        }

        // membuat getter menggunakan keyword get
        get name(): string {
            return this._name;
        }

        // membuat setter menggunakan keyword set
        set name(name: string) {
            this._name = name;
        }
    }
    it('should support getter and setter', () => {
        const product: Product = new Product(1, 'Cap', 200);

        // Memanggil getter name
        console.log(product.name);

        // Memanggil setter menggunkan name
        product.name = 'T-Shirt';
        console.log(product.name);
    });
});
