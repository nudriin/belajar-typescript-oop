describe('Error Handling', () => {
    // membuat class error menggunakan parent dari error

    class ValidationError extends Error {
        constructor(message: string) {
            super(message);
        }
    }

    const increment = (value: number): number => {
        if (value < 0) {
            throw new ValidationError('Value cannot be less than 0');
        }

        return value++;
    };

    it('should support error handling', () => {
        try {
            increment(-10);
        } catch (e) {
            if (e instanceof ValidationError) {
                console.log(e.message);
            }
        }
    });
});
