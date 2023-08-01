/**
 * This function calculate the total price of cart products.
 * @param {Array} products cartProduct: array of objects.
 * @returns {Number} total price of products.
 */
export const totalPrice = (products) => {
    return products.reduce((initialValue, products) => initialValue + products.price, 0);
};
