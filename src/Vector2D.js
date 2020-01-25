import Vector2DValidator from "./Vector2DValidator";

export default class Vector2D {
    // region getters/setters
    /**
     * @return {number}
     */
    getX() {
        return this._x;
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
        this._x = x;
        this._y = y;

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
        this._x = x;
        this._y = y;
    }
    // endregion constructors

    // region products
    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    add(vector) {
        Vector2DValidator.validate(vector);
        this._x = this.getX() + vector.getX();
        this._y = this.getY() + vector.getY();

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
     * @param {Number} scalar
     * @return {Vector2D}
     */
    addScalar(scalar) {
        this._x += scalar;
        this._y += scalar;

        return this;
    }

    /**
     * @param {Vector2D} vector
     * @param {Number} scalar
     * @return {Vector2D}
     */
    static addScalar(vector, scalar) {
        vector._x += scalar;
        vector._y += scalar;

        return vector;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    substract(vector) {
        Vector2DValidator.validate(vector);
        this._x = this.getX() - vector.getX();
        this._y = this.getY() - vector.getY();

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
        this._x = this.getX() * vector.getX();
        this._y = this.getY() * vector.getY();

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
        return Math.atan2(this.y, this.x);
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
        this._x = Math.round(this._x);
        this._y = Math.round(this._y);
    }

    floor() {
        this._x = Math.floor(this._x);
        this._y = Math.floor(this._y);
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    copy(vector) {
        Vector2DValidator.validate(vector);
        this._x = vector.getX();
        this._y = vector.getY();

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
        this._x = 0;
        this._y = 0;

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
        this._x = -this._x;
        this._y = -this._y;

        return this;
    }

    /**
     * @return {Vector2D}
     */
    negativeX() {
        this._x = -this._x;

        return this;
    }

    /**
     * @return {Vector2D}
     */
    negativeY() {
        this._y = -this._y;

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
        return this.distanceX(vector) * this.distanceX(vector) + this.distanceY(vector) * this.distanceY(vector);1
    }
    // endregion
}