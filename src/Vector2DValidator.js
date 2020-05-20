import Vector2D from "./Vector2D";

export default class Vector2DValidator {

    /**
     * @param {*} elt
     */
    static instanceofVector(elt) {
        if(!elt instanceof Vector2D) {
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