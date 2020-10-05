const MathExtension = {};

/**
 * @type {number}
 */
MathExtension.DEGREES = 180 / Math.PI;

/**
 * @param {number} radians
 * @return {number}
 */
MathExtension.radiansToDegrees = (radians) => {
    return radians * MathExtension.DEGREES;
};

/**
 * @param {number} degrees
 * @return {number}
 */
MathExtension.degreesToRadians = (degrees) => {
    return degrees * MathExtension.DEGREES;
};

export default MathExtension;