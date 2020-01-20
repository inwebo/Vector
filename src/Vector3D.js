import Vector2D from "./Vector2D";

export default class Vector3D extends Vector2D {
    // region getters/setters
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
     * @return {Vector3D}
     */
    static fromArray(array) {
        return new Vector3D(array[0]||0, array[1]||0, array[2]||0);
    }

    /**
     * @param object
     * @return {Vector3D}
     */
    static fromObject(object) {
        return new Vector3D(object.x||0, object.y||0, object.z||0);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this._z = z;
    }
    // endregion constructors

    /**
     * @return {Vector3D}
     */
    negative() {
        return new Vector3D(-this.getX(), -this.getY(), -this.getZ());
    }

    /**
     * @param {Vector3D} vector
     * @return {Vector3D}
     */
    add(vector) {
        return new Vector3D(this.getX() + vector.getX(), this.getY() + vector.getY(), this.getZ() + vector.getZ());
    }

    /**
     * @param {Vector3D} vector
     * @return {Vector3D}
     */
    substract(vector) {
        return new Vector3D(this.getX() - vector.getX(), this.getY() - vector.getY(), this.getZ() - vector.getZ());
    }

    /**
     * @param {Vector3D} vector
     * @return {Vector3D}
     */
    multiply(vector) {
        return new Vector3D(this.getX() * vector.getX(), this.getY() * vector.getY(), this.getZ() * vector.getZ());
    }

    /**
     * @param {Vector3D} vector
     * @return {Vector3D}
     */
    divide(vector) {
        return new Vector3D(this.getX() / vector.getX(), this.getY() / vector.getY(), this.getZ() / vector.getZ());
    }

    /**
     * @param {Vector3D} vector
     * @return {boolean}
     */
    equals(vector) {
        return this.getX() === vector.getX() && this.getY() === vector.getY() && this.getZ() === vector.getZ();
    }

    /**
     * @param {Vector3D} vector
     * @return {number}
     */
    dot(vector) {
        return this.getX() * vector.getX() + this.getY() * vector.getY() + this.getZ() * vector.getZ();
    }

    /**
     * @param {Vector3D} vector
     * @return {Vector3D}
     */
    cross(vector) {
        return new Vector3D(
            this.getY() * vector.getZ() - this.getZ() * vector.getY(),
            this.getZ() * vector.getX() - this.getX() * vector.getZ(),
            this.getZ() * vector.getY() - this.getY() * vector.getX()
        );
    }

    // region utility
    /**
     * @return {Vector3D}
     */
    clone() {
        return new Vector3D(this.getX(), this.getY(), this.getZ())
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
     * @param {Vector3D} vector
     */
    copy(vector) {
        this._x = vector.getX();
        this._y = vector.getY();
        this._z = vector.getZ();
    }
    // endregion
}