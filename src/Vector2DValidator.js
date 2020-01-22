import Vector2D from "./Vector2D";

class Vector2DValidator {

    /**
     * @param {string} name
     * @param {*} elt
     */
    static instanceofVector(elt) {
        const iof = elt instanceof Vector2D;
        if(!iof) {
            const type = typeof elt;
            throw new TypeError(`Arg is not an instance of Vector2D, input type was ${type}`);
        }
    }

    /**
     * @param elt
     */
    static validate(...elt) {
        elt.forEach((e) => {
            Vector2DValidator.instanceofVector(e);
        });
    }
}

export default Vector2DValidator;