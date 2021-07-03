var assert = require('assert');
const app = require('../src/app');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });
    });
});

// describe(" *** app *** ", function() {
//     describe(" *** suma *** ", function() {
//         it("Llamado a la funcion suma de la app", function() {
//             const result = app.suma(5, 2);
//             assert.strictEqual(result, 7, "Llamado fallido");
//         });
//     });
// });