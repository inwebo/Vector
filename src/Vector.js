export default class Vector {
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
     * @return {number}
     */
    getZ() {
        return this._z;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    set(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    // endregion

    // region constructors
    /**
     * @param {Array} array
     * @return {Vector}
     */
    static fromArray(array) {
        return new Vector(array[0]||0, array[1]||0, array[2]||0);
    }

    /**
     * @param object
     * @return {Vector}
     */
    static fromObject(object) {
        return new Vector(object.x||0, object.y||0, object.z||0);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x = 0, y = 0, z = 0) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    // endregion constructors

    /**
     * @return {Vector}
     */
    negative() {
        return new Vector(-this.getX(), -this.getY(), -this.getZ());
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    add(vector) {
        return new Vector(this.getX() + vector.getX(), this.getY() + vector.getX(), this.getZ() + vector.getZ());
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    substract(vector) {
        return new Vector(this.getX() - vector.getX(), this.getY() - vector.getX(), this.getZ() - vector.getZ());
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    multiply(vector) {
        return new Vector(this.getX() * vector.getX(), this.getY() * vector.getX(), this.getZ() * vector.getZ());
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    divide(vector) {
        return new Vector(this.getX() / vector.getX(), this.getY() / vector.getX(), this.getZ() / vector.getZ());
    }

    /**
     * @param {Vector} vector
     * @return {boolean}
     */
    equals(vector) {
        return this.getX() === vector.getX() && this.getY() === vector.getX() && this.getZ() === vector.getZ();
    }

    /**
     * @param {Vector} vector
     * @return {number}
     */
    dot(vector) {
        return this.getX() * vector.getX() + this.getY() * vector.getY() + this.getZ() * vector.getZ();
    }

    /**
     * @param {Vector} vector
     * @return {Vector}
     */
    cross(vector) {
        return new Vector(
            this.getY() * vector.getZ() - this.getZ() * vector.getY(),
            this.getZ() * vector.getX() - this.getX() * vector.getZ(),
            this.getZ() * vector.getY() - this.getY() * vector.getX()
        );
    }

    /**
     * @return {number}
     */
    length() {
        return Math.sqrt(this.dot(this));
    }

    // region utility
    /**
     * @return {Vector}
     */
    clone() {
        return new Vector(this.getX(), this.getY(), this.getZ())
    }

    /**
     * @return {number[]}
     */
    toArray() {
        return [this.getX(), this.getY(), this.getZ()];
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
        this._z = Math.round(this._z);
    }

    floor() {
        this._x = Math.floor(this._x);
        this._y = Math.floor(this._y);
        this._z = Math.floor(this._z);
    }

    /**
     * @param {Vector} vector
     */
    copy(vector) {
        this._x = vector.getX();
        this._y = vector.getY();
        this._z = vector.getZ();
    }
    // endregion
}