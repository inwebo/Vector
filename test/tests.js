import Vector2D from "../src/Vector2D";

const assert = require('assert');
const expect = require('chai').expect;


describe('Vector contructor', () => {

    describe('let v = new Vector()', () => {
        let v = new Vector2D();
        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = new Vector(100, 77)', () => {
        let v = new Vector2D(100, 77);
        it('v.getX() = 100', () => {
            assert.equal(v.getX(), 100);
        });
        it('v.getY() = 77', () => {
            assert.equal(v.getY(), 77);
        });
    });

    describe('let v = Vector.fromArray([])', () => {
        let v = Vector2D.fromArray([]);

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector.fromArray([1, 2])', () => {
        let v = Vector2D.fromArray([1, 2]);

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector.fromArray([1, 2, 3])', () => {
        let v = Vector2D.fromArray([1, 2]);

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector.fromArray(120)', () => {
        it('throw error', () => {
            expect(() => {Vector2D.fromArray(120)})
                .to
                .throw();
        });
    });

    describe('let v = Vector.fromObject({})', () => {
        let v = Vector2D.fromObject({});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector.fromObject({x: 1, y:2})', () => {
        let v = Vector2D.fromObject({x:1, y:2});

        it('v.getX() = 1', () => {
            assert.equal(v.getX(), 1);
        });
        it('v.getY() = 2', () => {
            assert.equal(v.getY(), 2);
        });
    });

    describe('let v = Vector.fromObject({foo: 1, bar:2})', () => {
        let v = Vector2D.fromObject({foo:1, bar:2});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });

    describe('let v = Vector.fromObject({foo: 1, bar:2})', () => {
        let v = Vector2D.fromObject({foo:1, bar:2});

        it('v.getX() = 0', () => {
            assert.equal(v.getX(), 0);
        });
        it('v.getY() = 0', () => {
            assert.equal(v.getY(), 0);
        });
    });


});
