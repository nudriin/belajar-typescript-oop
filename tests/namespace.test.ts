import { Math } from '../src/namespace'; // * mengimport namespace

describe('Namespace', () => {
    it('should support namespace', () => {
        Math.sayHello('nurdin'); // memanggil method sayHello yang ada pada namespaces
    });
});
