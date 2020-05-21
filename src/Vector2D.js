import Vector2DValidator from "./Vector2DValidator";

export default class Vector2D {
    // region getters/setters
    /**
     * @param {number} number
     * @return {Vector2D}
     */
    setX(number) {
        this._x = number;

        return this;
    }

    /**
     * @return {number}
     */
    getX() {
        return this._x;
    }

    /**
     * @param {number} number
     * @return {Vector2D}
     */
    setY(number) {
        this._y = number;

        return this;
    }

    /**
     * @return {number}
     */
    getY() {
        return this._y;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {Vector2D}
     */
    set(x, y) {
        this.setX(x);
        this.setY(y);

        return this;
    }
    // endregion

    // region constructors
    /**
     * @param {Array} array
     * @return {Vector2D}
     */
    static fromArray(array = []) {
        array = array || [];

        if(!Array.isArray(array)) {
            throw new TypeError(`Vector.fromArray() arg is not an array, type was '${typeof array}'`);
        }

        return new Vector2D(array[0]||0, array[1]||0);
    }

    /**
     * @param object
     * @return {Vector2D}
     */
    static fromObject(object) {
        object = object || {};
        return new Vector2D(object.x||0, object.y||0);
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x = 0, y = 0) {
        this.setX(x);
        this.setY(y);
    }
    // endregion constructors

    // region products
    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    add(vector) {
        Vector2DValidator.validate(vector);
        this.setX(this.getX() + vector.getX());
        this.setY(this.getY() + vector.getY());

        return this;
    }

    /**
     * @param {number} number
     * @return {Vector2D}
     */
    addX(number) {
        this.setX(this.getX() + number);

        return this;
    }

    /**
     * @param {number} number
     * @return {Vector2D}
     */
    addY(number) {
        this.setY(this.getY() + number);

        return this;
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static add(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX() + vector2.getX(), vector1.getY() + vector2.getY());
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static addX(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX() + vector2.getX(), vector1.getY());
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static addY(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX(), vector1.getY() + vector2.getY());
    }

    /**
     * @param {number} scalar
     * @return {Vector2D}
     */
    addScalar(scalar) {
        this.addX(scalar);
        this.addY(scalar);

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @param {Number} scalar
     * @return {Vector2D}
     */
    static addScalar(vector, scalar) {
        Vector2DValidator.validate(vector);
        vector.addX(scalar);
        vector.addY(scalar);

        return vector;
    }

    /**
     * @param {number} number
     * @return {Vector2D}
     */
    substractScalarX(number) {
        this.setX(this.getX() - number);

        return this;
    }

    /**
     * @param {number} number
     * @return {Vector2D}
     */
    substractScalarY(number) {
        this.setY(this.getY() - number);

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    substract(vector) {
        Vector2DValidator.validate(vector);
        this.substractScalarX(vector.getX());
        this.substractScalarY(vector.getY());

        return this;
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static substract(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    multiply(vector) {
        Vector2DValidator.validate(vector);
        this.multiplyX(vector);
        this.multiplyY(vector);

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    multiplyX(vector) {
        Vector2DValidator.validate(vector);
        this.setX(this.getX() * vector.getX());

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    multiplyY(vector) {
        Vector2DValidator.validate(vector);
        this.setY(this.getY() * vector.getY());

        return this;
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static multiply(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX() * vector2.getX(), vector1.getY() * vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    divide(vector) {
        Vector2DValidator.validate(vector);
        this._x = this.getX() / vector.getX();
        this._y = this.getY() / vector.getY();

        return this;
    }

    /**
     * @param {number} scalar
     * @return {Vector2D}
     */
    divideScalar(scalar) {
        this.setX(this.getX() / scalar);
        this.setY(this.getY() / scalar);

        return this;
    }

    /**
     * @param {number} scalar
     * @return {Vector2D}
     */
    divideScalarX(scalar) {
        const result = this.getX() / scalar;
        this.setX(result);

        return this;
    }

    /**
     * @param {number} scalar
     * @return {Vector2D}
     */
    divideScalarY(scalar) {
        this.setY(this.getY() / scalar);

        return this;
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static divide(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return new Vector2D(vector1.getX() / vector2.getX(), vector1.getY() / vector2.getY());
    }

    /**
     * @see https://en.wikipedia.org/wiki/Dot_product
     * @param {Vector2D} vector
     * @return {number} Dot product
     */
    dot(vector) {
        Vector2DValidator.validate(vector);
        return this.getX() * vector.getX() + this.getY() * vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     */
    static dot(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return vector1.getX() * vector2.getX() + vector1.getY() * vector2.getY();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    cross(vector) {
        Vector2DValidator.validate(vector);
        return (this.getX() * vector.getY()) - (this.getY() * vector.getX());
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     */
    static cross(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return (vector1.getX() * vector2.getY()) - (vector1.getY() * vector2.getX());
    }

    /**
     * @return {number}
     */
    magnitude() {
        return Math.sqrt(this.dot(this));
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {number}
     */
    static magnitude(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return Math.sqrt(Vector2D.dot(vector1, vector2));
    }

    /**
     * @return {number}
     */
    magnitudeSq() {
        return Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2);
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    static magnitudeSq(vector) {
        Vector2DValidator.validate(vector);
        return Math.pow(vector.getX(), 2) + Math.pow(vector.getY(), 2);
    }
    // endregion


    // region rotate
    /**
     * @return {number}
     */
    horizontalAngle() {
        return Math.atan2(this.getY(), this.getX());
    };

    /**
     * @return {number}
     */
    angle() {
        return this.horizontalAngle();
    }

    /**
     * @param {number} radians
     * @return {Vector2D}
     */
    rotate(radians) {
        this._x = (this.getX() * Math.cos(radians)) - (this.getY() * Math.sin(radians));
        this._y = (this.getX() * Math.sin(radians)) + (this.getY() * Math.cos(radians));

        return this;
    }

    /**
     * @param {Number} degrees
     * @return {Vector2D}
     */
    rotateDegrees(degrees) {
        this.rotate(Math.degreesToRadians(degrees));
        return this;
    }

    /**
     * @param {Number} radians
     */
    rotateBy(radians) {
        return this.rotate(this.angle() + radians);
    }

    /**
     * @param {Number} radians
     */
    rotateByDegrees(radians) {
        return this.rotateBy(this.angle() + Math.radiansToDegrees(radians));
    }
    // endregion

    // region utilities
    /**
     * X strictly less
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    xlt(vector) {
        return this.getX() < vector.getX();
    }

    /**
     * Y strictly less
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    ylt(vector) {
        return this.getY() < vector.getY();
    }

    /**
     * Less
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    lt(vector) {
        return this.xlt(vector) && this.ylt(vector);
    }

    /**
     * X less or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    xle(vector) {
        return this.getX() <= vector.getX();
    }

    /**
     * Y less or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    yle(vector) {
        return this.getY() <= vector.getY();
    }

    /**
     * Less or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    le(vector) {
        return this.xle(vector) && this.yle(vector);
    }

    /**
     * X strictly greater
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    xgt(vector) {
        return this.getX() > vector.getX();
    }

    /**
     * Y strictly greater
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    ygt(vector) {
        return this.getY() > vector.getY();
    }

    /**
     * Greater
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    gt(vector) {
        return this.xgt(vector) && this.ygt(vector);
    }

    /**
     * X greater or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    xge(vector) {
        return this.getX() >= vector.getX();
    }

    /**
     * Y greater or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    yge(vector) {
        return this.getY() >= vector.getY();
    }

    /**
     * greater or equal
     *
     * @param {Vector2D} vector
     * @return {boolean}
     */
    ge(vector) {
        return this.xle(vector) && this.yle(vector);
    }

    /**
     * @param {Vector2D} min
     * @param {Vector2D} max
     * @param {boolean} strict
     * @return {Vector2D}
     */
    clamp(min, max, strict = true) {
        Vector2DValidator.validate(min);
        Vector2DValidator.validate(max);

        if(strict) {
            if(this.getX() < min.getX()) {
                this.setX(min.getX());
            }

            if(this.getX() > max.getY()) {
                this.setX(max.getY());
            }

            if(this.getY() < min.getY()) {
                this.setY(min.getY());
            }

            if(this.getY() > max.getY()) {
                this.setY(max.getY());
            }
        } else {
            if(this.getX() <= min.getX()) {
                this.setX(min.getX());
            }

            if(this.getX() >= max.getY()) {
                this.setX(max.getY());
            }

            if(this.getY() <= min.getY()) {
                this.setY(min.getY());
            }

            if(this.getY() >= max.getY()) {
                this.setY(max.getY());
            }
        }

        return this;
    }

    /**
     * @return {Vector2D}
     */
    clone() {
        return new Vector2D(this.getX(), this.getY())
    }

    /**
     * @return {number[]}
     */
    toArray() {
        return [this.getX(), this.getY()];
    }

    /**
     * @param {string} separator
     * @return {string}
     */
    toString(separator = ',') {
        return this.toArray().join(separator);
    }

    /**
     * @return {Object}
     */
    toObject() {
        return {x: this.getX(), y: this.getY()};
    }

    round() {
        this.setX(Math.round(this._x));
        this.setY(Math.round(this._y));
    }

    floor() {
        this.setX(Math.floor(this._x));
        this.setY(Math.floor(this._y));
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    copy(vector) {
        Vector2DValidator.validate(vector);
        this.setX(vector.getX());
        this.setY(vector.getY());

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @return {boolean}
     */
    equals(vector) {
        Vector2DValidator.validate(vector);
        return this.getX() === vector.getX() && this.getY() === vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {boolean}
     */
    static equals(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return vector1.getX() === vector2.getX() && vector1.getY() === vector2.getY();
    }

    /**
     * @return {Vector2D}
     */
    zero() {
        this.setX(0);
        this.setY(0);

        return this;
    }

    /**
     * @param {Vector2D} vector
     */
    static zero(vector) {
        Vector2DValidator.validate(vector);
        vector._x = 0;
        vector._y = 0;
    }

    /**
     * @return {boolean|boolean}
     */
    isZero() {
        return this.getX() === 0 && this.getY() === 0;
    }

    /**
     * @param {Vector2D} vector
     * @return {boolean|boolean}
     */
    static isZero(vector) {
        Vector2DValidator.validate(vector);
        return vector.getX() === 0 && vector.getY() === 0;
    }

    /**
     * @alias magnitude
     * @return {number}
     */
    length() {
        return this.magnitude();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @alias magnitude
     * @return {number}
     */
    static length(vector1, vector2) {
        Vector2DValidator.validate(vector1, vector2);
        return Vector2D.magnitude(vector1, vector2);
    }

    /**
     * @return {Vector2D}
     */
    negative() {
        this.setX(-this.getX());
        this.setY(-this.getY());

        return this;
    }

    /**
     * @return {Vector2D}
     */
    negativeX() {
        this.setX(-this.getX());

        return this;
    }

    /**
     * @return {Vector2D}
     */
    negativeY() {
        this.setY(-this.getY());

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    static negative(vector) {
        Vector2DValidator.validate(vector);
        return new Vector2D(-vector.getX(), -vector.getY());
    }


    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceX(vector) {
        Vector2DValidator.validate(vector);
        return this.getX() - vector.getX();
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    distanceAbs(vector) {
        Vector2DValidator.validate(vector);
        return new Vector2D(this.distanceXAbs(vector), this.distanceYAbs(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceXAbs(vector) {
        Vector2DValidator.validate(vector);
        return Math.abs(this.distanceX(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceY(vector) {
        Vector2DValidator.validate(vector);
        return this.getY() - vector.getY();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceYAbs(vector) {
        Vector2DValidator.validate(vector);
        return Math.abs(this.distanceY(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distance(vector) {
        Vector2DValidator.validate(vector);
        return Math.sqrt(this.distanceSq(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceSq(vector) {
        Vector2DValidator.validate(vector);
        return this.distanceX(vector) * this.distanceX(vector) + this.distanceY(vector) * this.distanceY(vector);
    }

    /**
     * @return {Vector2D}
     */
    normalize() {
        const length = this.length();

        if (length === 0) {
            this.setX(1);
            this.setY(0);
        } else {
            this.divide(new Vector2D(length, length));
        }

        return this;
    }
    // endregion
}