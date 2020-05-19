import Vector2D from "../src/Vector2D";

const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');

describe('Vector set', () => {
    describe('let v = new Vector2D()', () => {
        let v = new Vector2D();

        v.set(154.458, 55);

        it('v.getX() = 154.458', () => {
            assert.equal(v.getX(), 154.458);
        });
        it('v.getY() = 55', () => {
            assert.equal(v.getY(), 55);
        });
    });
});

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

    describe('let v = new Vector2D(0, 0); v.isZero(v);', () => {
        let v = new Vector2D(0, 0);

        it('v.isZero() = 0', () => {
            assert.equal(v.isZero(), true);
        });
    });

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
        let v = new Vector2D(0, 0);
        v.zero(v);

        it('v.zero()', () => {
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
    describe('const v1 =  new Vector2D(5, 7); const v2 =  new Vector2D(4, 2);', () => {
        const v1 =  new Vector2D(5, 7);
        const v2 =  new Vector2D(4, 2);

        v1.add(v2);

        it('v.getX() = 9; v.getY() = 9', () => {
            assert.equal(v1.getX(), 9);
            assert.equal(v1.getY(), 9);
        });
    });

    describe('const v1 =  new Vector2D(5, 7); const v2 =  new Vector2D(4, 2); let v3 = Vector2D.add(v1, v2);', () => {
        const v1 =  new Vector2D(5, 7);
        const v2 =  new Vector2D(4, 2);
        let v3 = Vector2D.add(v1, v2);

        it('v.getX() = 9; v.getY() = 9', () => {
            assert.equal(v3.getX(), 9);
            assert.equal(v3.getY(), 9);
        });
    });

    describe('const v1 =  new Vector2D(13, 57); const v2 =  new Vector2D(3, 47); v1.substract(v2);', () => {
        const v1 =  new Vector2D(13, 57);
        const v2 =  new Vector2D(3, 47);
        v1.substract(v2);

        it('v.getX() = 10; v.getY() = 10', () => {
            assert.equal(v1.getX(), 10);
            assert.equal(v1.getY(), 10);
        });
    });

    describe('const v1 =  new Vector2D(13, 57); const v2 =  new Vector2D(3, 47); let v3 = Vector2D.substract(v1, v2);', () => {
        const v1 =  new Vector2D(13, 57);
        const v2 =  new Vector2D(3, 47);
        let v3 = Vector2D.substract(v1, v2);

        it('v3.getX() = 10; v3.getY() = 10', () => {
            assert.equal(v3.getX(), 10);
            assert.equal(v3.getY(), 10);
        });
    });

    describe('const v1 =  new Vector2D(12, 48); const v2 =  new Vector2D(8, 4); v1.multiply(v2)', () => {
        const v1 =  new Vector2D(12, 48);
        const v2 =  new Vector2D(8, 4);
        v1.multiply(v2);

        it('v1.getX() = 96; v1.getY() = 192', () => {
            assert.equal(v1.getX(), 96);
            assert.equal(v1.getY(), 192);
        });
    });

    describe('const v1 =  new Vector2D(12, 48); const v2 =  new Vector2D(8, 4); let v3 = Vector2D.multiply(v1, v2)', () => {
        const v1 =  new Vector2D(12, 48);
        const v2 =  new Vector2D(8, 4);
        let v3 = Vector2D.multiply(v1, v2);

        it('v3.getX() = 96; v3.getY() = 192', () => {
            assert.equal(v3.getX(), 96);
            assert.equal(v3.getY(), 192);
        });
    });

    describe('const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(2, 3); v1.divide(v2);', () => {
        it('v1.getX() = 5; v1.getY() = 3', () => {
            const v1 =  new Vector2D(10, 9);
            const v2 =  new Vector2D(2, 3);
            v1.divide(v2);

            assert.equal(v1.getX(), 5);
            assert.equal(v1.getY(), 3);
        });
    });

    describe('const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(2, 3); let v3 = Vector2D.divide(v1, v2);', () => {
        it('v1.getX() = 5; v1.getY() = 3', () => {
            const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(2, 3); let v3 = Vector2D.divide(v1, v2);

            assert.equal(v3.getX(), 5);
            assert.equal(v3.getY(), 3);
        });
    });

    describe('const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(10, 9); v1.equals(v2);', () => {
        it('v1.equals(v2)', () => {
            const v1 =  new Vector2D(10, 9);
            const v2 =  new Vector2D(10, 9);

            assert.equal(v1.equals(v2), true);
        });
    });

    describe('const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(10, 9); Vector2D.equals(v1, v2);', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            const v1 =  new Vector2D(10, 9);
            const v2 =  new Vector2D(10, 9);

            assert.equal(Vector2D.equals(v1, v2), true);
        });
    });

    describe('const v1 =  new Vector2D(10, 9); const v2 =  new Vector2D(10, 9); Vector2D.equals(v1, v2);', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            const v1 =  new Vector2D(10, 9);
            const v2 =  new Vector2D(10, 9);

            assert.equal(Vector2D.equals(v1, v2), true);
        });
    });

    describe('const v1 =  new Vector2D(10.05, 9.59);v1.round();', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            const v1 =  new Vector2D(10.05, 9.59);
            v1.round();

            assert.equal(v1.getX() === 10, true);
            assert.equal(v1.getY() === 10, true);
        });
    });

    describe('const v1 =  new Vector2D(10.05, 9.59);v1.floo();', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            const v1 =  new Vector2D(10.05, 9.59);
            v1.floor();

            assert.equal(v1.getX() === 10, true);
            assert.equal(v1.getY() === 9, true);
        });
    });

    describe('const v1 =  new Vector2D(5, 5);v1.magnitude();', () => {
        it(' Vector2D.equals(v1, v2)', () => {
            const v1        = new Vector2D(5, 5);
            const magnitude = Math.sqrt(Math.pow(v1.getX(), 2) + Math.pow(v1.getY(), 2));

            assert.equal(v1.magnitude(), magnitude);
        });
    });
});


describe('Exceptions bad args', () => {
    describe('const v1 =  []; Vector2D.zero(v1)', () => {
        it('throw error', () => {
            const v1 =  '';

            expect(() => {
                Vector2D.zero(v1)
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  []; Vector2D.isZero(v1)', () => {
        it('throw error', () => {
            const v1 =  '';

            expect(() => {
                Vector2D.isZero(v1)
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  []; Vector2D.negative(v1)', () => {
        it('throw error', () => {
            const v1 =  '';

            expect(() => {
                Vector2D.negative(v1)
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.add(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.add(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.add(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.add(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.substract(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.substract(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.substract(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.substract(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.multiply(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.multiply(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.multiply(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.multiply(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.divide(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.divide(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.divide(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.divide(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.equals(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.equals(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.divide(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.equals(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.dot(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.dot(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.dot(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.dot(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.cross(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.cross(v2);
            })
                .to
                .throw();
        });
    });


    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.cross(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.magnitude(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  []; Vector2D.magnitudeSq(v1);', () => {
        it('throw error', () => {
            const v1 =  [];

            expect(() => {
                Vector2D.magnitudeSq(v1);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; Vector2D.length(v1, v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                Vector2D.length(v1, v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distanceX(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distanceX(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distanceXAbs(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distanceXAbs(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distanceY(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distanceY(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distanceYAbs(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distanceYAbs(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distance(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distance(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const v2 =  []; v1.distanceSq(v2);', () => {
        it('throw error', () => {
            const v1 =  new Vector2D();const v2 =  [];

            expect(() => {
                v1.distanceSq(v2);
            })
                .to
                .throw();
        });
    });

    describe('const v1 =  new Vector2D();const scalar =  3; v1.divideScalarX(scalar);', () => {
        it('throw error', () => {
            const v1     =  new Vector2D(12,0);
            const scalar =  3;
            v1.divideScalarX(scalar);

            assert.equal(v1.getX(), 4);
        });
    });

    describe('const v1 =  new Vector2D();const scalar =  3; v1.divideScalarY(scalar);', () => {
        it('throw error', () => {
            const v1     =  new Vector2D(0,12);
            const scalar =  3;
            v1.divideScalarY(scalar);

            assert.equal(v1.getY(), 4);
        });
    });
});

describe('Utilities', () => {

    describe('const v1 =  new Vector2D(0, 0);const v2 =  new Vector2D(10, 10); const v3 = new Vector2d(5,5);', () => {
        const v1 = new Vector2D(0, 0);
        const v2 = new Vector2D(10, 10);
        const v3 = new Vector2D(5, 5);

        assert.equal(v3.xlt(v2), true);
        assert.equal(v3.ylt(v2), true);

        assert.equal(v3.xgt(v1), true);
        assert.equal(v3.ygt(v1), true);
    });

    describe('const v1 =  new Vector2D(0, 0);const v2 =  new Vector2D(10, 10); const v3 = new Vector2d(5,5);', () => {
        const v1 = new Vector2D(0, 0);
        const v2 = new Vector2D(10, 10);
        const v3 = new Vector2D(5, 5);

        assert.equal(v3.xgt(v2), false);
        assert.equal(v3.ygt(v2), false);

        assert.equal(v3.xlt(v1), false);
        assert.equal(v3.ylt(v1), false);
    });

    describe('const v1 =  new Vector2D(0, 0);const v2 =  new Vector2D(10, 10); const v3 = new Vector2d(0,10);', () => {
        const v1 = new Vector2D(0, 0);
        const v2 = new Vector2D(10, 10);
        const v3 = new Vector2D(0, 10);

        assert.equal(v3.xle(v2), true);
        assert.equal(v3.yle(v2), true);

        assert.equal(v3.xge(v1), true);
        assert.equal(v3.yge(v1), true);
    });


    describe('const v1 =  new Vector2D();const v2 =  new Vector2D(1, 1); v1.copy(v2);', () => {
        const v1 = new Vector2D();
        const v2 = new Vector2D(1, 1);
        v1.copy(v2);

        assert.equal(v1.getX(), v2.getX());
        assert.equal(v1.getY(), v2.getY());
    });

    describe('const v1 =  new Vector2D(157.5, 207);const v2 =  v1.clone();', () => {
        const v1 =  new Vector2D(157.5, 207);
        const v2 = v1.clone();

        assert.equal(v1.getX(), v2.getX());
        assert.equal(v1.getY(), v2.getY());
    });

    describe('const v1 =  new Vector2D(157.5, 207);const array =  v1.toArray();', () => {
        const v1 =  new Vector2D(157.5, 207);
        const v2 = v1.toArray();

        assert.equal(v1.getX(), v2[0]);
        assert.equal(v1.getY(), v2[1]);
    });

    describe('const v1 =  new Vector2D(157.5, 207);const array =  v1.toObject();', () => {
        const v1 =  new Vector2D(157.5, 207);
        const v2 = v1.toObject();

        assert.equal(v1.getX(), v2.x);
        assert.equal(v1.getY(), v2.y);
    });
});