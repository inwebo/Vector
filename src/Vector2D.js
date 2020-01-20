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
    static fromArray(array) {
        return new Vector2D(array[0]||0, array[1]||0);
    }

    /**
     * @param object
     * @return {Vector2D}
     */
    static fromObject(object) {
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
     * @param {Vector2D} vector1
     * @param {Vector2D} vector2
     * @return {Vector2D}
     */
    static add(vector1, vector2) {
        return new Vector2D(vector1.getX() + vector2.getX(), vector1.getY() + vector2.getY());
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
     multiply(vector) {

    }

    /**
     * @param {Vector2D} vector
     * @return {Vector2D}
     */
    static multiply(vector) {

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
     * @return {Vector2D}
     */
    divide(vector) {

    }

    /**
     * @param {Vector2D} vector
     * @return {boolean}
     */
    equals(vector) {
        return this.getX() === vector.getX() && this.getY() === vector.getY();
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
     * @param {Vector2D} vector
     * @return {number}
     */
    cross(vector) {
        return (this.getX() * vector.getY() ) - (this.getY() * vector.getX());
    }

    /**
     * @return {number}
     */
    magnitude() {
        return Math.sqrt(this.dot(this));
    }

    /**
     * @alias magnitude
     * @return {number}
     */
    length() {
        return this.magnitude();
    }

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