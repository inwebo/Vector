import Vector2D from "../src/Vector2D";

const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');


describe('Vector contructor', () => {

    describe('let v = new Vector2D()', () => {
        let v = new Vector2D();
        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector2D(100, 77)', () => {
        let v = new Vector2D(100, 77);
        it('v.getX() = 100', () => {
            assert.equal(v.getX(), 100);
        });
        it('v.getY() = 77', () => {
            assert.equal(v.getY(), 77);
        });
    });

    describe('let v = Vector2D.fromArray([])', () => {
        let v = Vector2D.fromArray([]);

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector2D.fromArray([1, 2])', () => {
        let v = Vector2D.fromArray([1, 2]);

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector2D.fromArray([1, 2, 3])', () => {
        let v = Vector2D.fromArray([1, 2]);

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector2D.fromArray()', () => {
        let v = Vector2D.fromArray();

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector2D.fromArray(120)', () => {
        it('throw error', () => {
            expect(() => {Vector2D.fromArray(120)})
                .to
                .throw();
        });
    });

    describe('let v = Vector2D.fromObject({})', () => {
        let v = Vector2D.fromObject({});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector2D.fromObject({x: 1, y:2})', () => {
        let v = Vector2D.fromObject({x:1, y:2});

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector2D.fromObject({foo: 1, bar:2})', () => {
        let v = Vector2D.fromObject({foo:1, bar:2});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector2D.fromObject({foo: 1, bar:2})', () => {
        let v = Vector2D.fromObject({foo:1, bar:2});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector2D()', () => {
        let v = new Vector2D();

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector2D(15, 50)', () => {
        let v = new Vector2D(15, 50);

        it('v.getX() = 15', () => {
            assert.equal(v.getX(), 15);
        });
        it('v.getY() = 50', () => {
            assert.equal(v.getY(), 50);
        });
    });
});

describe('Vector zeroing', () => {
    describe('let v = new Vector2D(15, 50); Vector2D.zero(v);', () => {
        let v = new Vector2D(15, 50);
        Vector2D.zero(v);

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector2D(15, 50); Vector2D.zero(v); v.isZero()', () => {
        let v = new Vector2D(15, 50);
        Vector2D.zero(v);

        it('v.isZero()', () => {
            assert.equal(v.getX(), 0);
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector2D(15, -50); v.negative();', () => {
        let v = new Vector2D(15, -50);
        v.negative();

        it('v.negative()', () => {
            assert.equal(v.getX(), -15);
            assert.equal(v.getY(), 50);
        });
    });

    describe('let v = new Vector2D(-15, -50); Vector2D.negative(v);', () => {
        let v = new Vector2D(-15, -50);
        v = Vector2D.negative(v);

        it('Vector2D.negative(v)', () => {
            assert.equal(v.getX(), 15);
            assert.equal(v.getY(), 50);
        });
    });
});

describe('Vector operations', () => {
    describe('let v1 = new Vector2D(5, 7); let v2 = new Vector2D(4, 2);', () => {
        let v1 = new Vector2D(5, 7);
        let v2 = new Vector2D(4, 2);

        v1.add(v2);

        it('v.getX() = 9; v.getY() = 9', () => {
            assert.equal(v1.getX(), 9);
            assert.equal(v1.getY(), 9);
        });
    });

    describe('let v1 = new Vector2D(5, 7); let v2 = new Vector2D(4, 2); let v3 = Vector2D.add(v1, v2);', () => {
        let v1 = new Vector2D(5, 7);
        let v2 = new Vector2D(4, 2);
        let v3 = Vector2D.add(v1, v2);

        it('v.getX() = 9; v.getY() = 9', () => {
            assert.equal(v3.getX(), 9);
            assert.equal(v3.getY(), 9);
        });
    });

    describe('let v1 = new Vector2D(13, 57); let v2 = new Vector2D(3, 47); v1.substract(v2);', () => {
        let v1 = new Vector2D(13, 57);
        let v2 = new Vector2D(3, 47);
        v1.substract(v2);

        it('v.getX() = 10; v.getY() = 10', () => {
            assert.equal(v1.getX(), 10);
            assert.equal(v1.getY(), 10);
        });
    });

    describe('let v1 = new Vector2D(13, 57); let v2 = new Vector2D(3, 47); let v3 = Vector2D.substract(v1, v2);', () => {
        let v1 = new Vector2D(13, 57);
        let v2 = new Vector2D(3, 47);
        let v3 = Vector2D.substract(v1, v2);

        it('v3.getX() = 10; v3.getY() = 10', () => {
            assert.equal(v3.getX(), 10);
            assert.equal(v3.getY(), 10);
        });
    });

    describe('let v1 = new Vector2D(12, 48); let v2 = new Vector2D(8, 4); v1.multiply(v2)', () => {
        let v1 = new Vector2D(12, 48);
        let v2 = new Vector2D(8, 4);
        v1.multiply(v2);

        it('v1.getX() = 96; v1.getY() = 192', () => {
            assert.equal(v1.getX(), 96);
            assert.equal(v1.getY(), 192);
        });
    });

    describe('let v1 = new Vector2D(12, 48); let v2 = new Vector2D(8, 4); let v3 = Vector2D.multiply(v1, v2)', () => {
        let v1 = new Vector2D(12, 48);
        let v2 = new Vector2D(8, 4);
        let v3 = Vector2D.multiply(v1, v2);

        it('v3.getX() = 96; v3.getY() = 192', () => {
            assert.equal(v3.getX(), 96);
            assert.equal(v3.getY(), 192);
        });
    });

    describe('let v1 = new Vector2D(10, 9); let v2 = new Vector2D(2, 3); v1.divide(v2);', () => {
        it('v1.getX() = 5; v1.getY() = 3', () => {
            let v1 = new Vector2D(10, 9);
            let v2 = new Vector2D(2, 3);
            v1.divide(v2);

            assert.equal(v1.getX(), 5);
            assert.equal(v1.getY(), 3);
        });
    });

    describe('let v1 = new Vector2D(10, 9); let v2 = new Vector2D(2, 3); let v3 = Vector2D.divide(v1, v2);', () => {
        it('v1.getX() = 5; v1.getY() = 3', () => {
            let v1 = new Vector2D(10, 9); let v2 = new Vector2D(2, 3); let v3 = Vector2D.divide(v1, v2);

            assert.equal(v3.getX(), 5);
            assert.equal(v3.getY(), 3);
        });
    });

    describe('let v1 = new Vector2D(10, 9); let v2 = new Vector2D(10, 9); v1.equals(v2);', () => {
        it('v1.equals(v2)', () => {
            let v1 = new Vector2D(10, 9);
            let v2 = new Vector2D(10, 9);

            assert.equal(v1.equals(v2), true);
        });
    });

    describe('let v1 = new Vector2D(10, 9); let v2 = new Vector2D(10, 9); Vector2D.equals(v1, v2);', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            let v1 = new Vector2D(10, 9);
            let v2 = new Vector2D(10, 9);

            assert.equal(Vector2D.equals(v1, v2), true);
        });
    });

    describe('let v1 = new Vector2D(10, 9); let v2 = new Vector2D(10, 9); Vector2D.equals(v1, v2);', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            let v1 = new Vector2D(10, 9);
            let v2 = new Vector2D(10, 9);

            assert.equal(Vector2D.equals(v1, v2), true);
        });
    });
});


describe('Exceptions bad args', () => {
    describe('let v1 = []; Vector2D.zero(v1)', () => {
        it('throw error', () => {
            let v1 = '';

            expect(() => {
                Vector2D.zero(v1)
            })
                .to
                .throw();
        });
    });
});