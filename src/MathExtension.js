const DEGREES = 180 / Math.PI;

const MathExtension = {};

/**
 * @param {number} radians
 * @return {number}
 */
MathExtension.radiansToDegrees = (radians) => {
    return radians * DEGREES;
};

/**
 * @param {number} degrees
 * @return {number}
 */
MathExtension.degreesToRadians = (degrees) => {
    return degrees * DEGREES;
};


export default MathExtension;