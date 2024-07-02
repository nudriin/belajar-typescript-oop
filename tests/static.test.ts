describe('Static', () => {
    class Config {
        // static properties
        static DB_NAME: string = 'DB1122';
        static VERSION: number = 1.0;
    }

    class Helper {
        // static method
        static getHelp(): void {
            console.log("I'm here to help you");
        }
    }

    it('should support static properties and method', () => {
        console.log(Config.DB_NAME); // dapat langsung dipanggil seperti ini
        Helper.getHelp(); // dapat langsung dipanggil seperti ini
    });
});
