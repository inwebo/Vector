import Vector2D from "../src/Vector2D";

const assert = require('assert');
const expect = require('chai').expect;


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
