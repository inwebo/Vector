const DEGREES = 180 / Math.PI;

const MathExtension = () => {
    if (!Math.__proto__.radiansToDegrees) {
        /**
         * @param {number} radians
         * @returns {number}
         */
        Math.__proto__.radiansToDegrees = (radians) => {
            return radians * DEGREES;
        };
    }

    if (!Math.__proto__.degreesToRadians) {
        /**
         * @param {int} degrees
         * @returns {number}
         */
        Math.__proto__.degreesToRadians = (degrees) => {
            return degrees * DEGREES;
        };
    }
};

export default MathExtension();