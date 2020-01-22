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
     */
    set(x, y) {
        this._x = x;
        this._y = y;
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

    zero() {
        this._x = 0;
        this._y = 0;
    }

    /**
     * @param {Vector2D} vector
     */
    static zero(vector) {
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
        return vector.getX() === 0 && vector.getY() === 0;
    }

    /**
     * @return {Vector2D}
     */
    negative() {
        this._x = -this._x;
        this._y = -this._y;
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    static negative(vector) {
        return new Vector2D(-vector.getX(), -vector.getY());
    }

    /**
     * @param {Vector2D} vector
     */
    add(vector) {
        this._x = this.getX() + vector.getX();
        this._y = this.getY() + vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static add(vector1, vector2) {
        return new Vector2D(vector1.getX() + vector2.getX(), vector1.getY() + vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     */
    substract(vector) {
        this._x = this.getX() - vector.getX();
        this._y = this.getY() - vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static substract(vector1, vector2) {
        return new Vector2D(vector1.getX() - vector2.getX(), vector1.getY() - vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     */
    multiply(vector) {
        this._x = this.getX() * vector.getX();
        this._y = this.getX() * vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static multiply(vector1, vector2) {
        return new Vector2D(vector1.getX() * vector2.getX(), vector1.getY() * vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    divide(vector) {
        this._x = this.getX() / vector.getX();
        this._y = this.getX() / vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static divide(vector1, vector2) {
        return new Vector2D(vector1.getX() / vector2.getX(), vector1.getY() / vector2.getY());
    }

    /**
     * @param {Vector2D} vector
     * @return {boolean}
     */
    equals(vector) {
        return this.getX() === vector.getX() && this.getY() === vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {boolean}
     */
    static equals(vector1, vector2) {
        return vector1.getX() === vector2.getX() && vector1.getY() === vector2.getY();
    }

    /**
     * @see https://en.wikipedia.org/wiki/Dot_product
     * @param {Vector2D} vector
     * @return {number} Dot product
     */
    dot(vector) {
        return this.getX() * vector.getX() + this.getY() * vector.getY();
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     */
    static dot(vector1, vector2) {
        return vector1.getX() * vector2.getX() + vector1.getY() * vector2.getY();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    cross(vector) {
        return (this.getX() * vector.getY()) - (this.getY() * vector.getX());
    }

    /**
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     */
    static cross(vector1, vector2) {
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
        return Math.sqrt(Vector2D.dot(vector1, vector2));
    }

    /**
     * @return {number}
     */
    magnitudeSq() {
        return this.getX() * this.getX() + this.getY() * this.getY();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    static magnitudeSq(vector) {
        return vector.getX() * vector.getX() + vector.getY() * vector.getY();
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
        return Vector2D.magnitude(vector1, vector2);
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceX(vector) {
        return this.getX() - vector.getX();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceXAbs(vector) {
        return Math.abs(this.distanceX(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceY(vector) {
        return this.getY() - vector.getY();
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceYAbs(vector) {
        return Math.abs(this.distanceY(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distance(vector) {
        return Math.sqrt(this.distanceSq(vector));
    }

    /**
     * @param {Vector2D} vector
     * @return {number}
     */
    distanceSq(vector) {
        return this.distanceX(vector) * this.distanceX(vector) + this.distanceY(vector) * this.distanceY(vector);1
    }

    // region rotate
    /**
     * @param {Number} radians
     */
    rotate(radians) {
        this._x = (this.getX() * Math.cos(radians)) - (this.getY() * Math.sin(radians));
        this._y = (this.getX() * Math.cos(radians)) - (this.getY() * Math.cos(radians));
    }

    /**
     * @param {Number} degrees
     */
    rotateDegrees(degrees) {
        this._x = (this.getX() * Math.cos(Math.radiansToDegrees(degrees))) - (this.getY() * Math.sin(Math.radiansToDegrees(degrees)));
        this._y = (this.getX() * Math.cos(Math.radiansToDegrees(degrees))) - (this.getY() * Math.cos(Math.radiansToDegrees(degrees)));
    }

    /**
     * @param {Number} radians
     */
    rotateBy(radians) {

    }
    // endregion

    // region utility
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
     */
    merge(vector) {
        this._x = vector.getX();
        this._y = vector.getY();
    }
    // endregion
}