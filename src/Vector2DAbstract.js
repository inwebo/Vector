class Vector2DAbstract {
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
}