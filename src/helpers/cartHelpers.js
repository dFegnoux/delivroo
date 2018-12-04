/**
 * Format a number to a price standard string
 * @param {Number} number
 * @returns {String}
 */
export function formatToPriceString(number) {
  return `${number.toFixed(2).replace(".", ",")} €`;
}

/**
 * Get a simple addition of every elements of cart to get the totalRaw
 * @param {Object} objCartMenus : The cart menus object
 * @returns {Number}
 */
export function calculateCartTotalPrice(objCartMenus) {
  const cartMenus = Object.entries(objCartMenus);
  let totalRaw = 0;

  cartMenus.forEach(menu => {
    totalRaw += menu[1].price * menu[1].quantity;
  });

  return formatToPriceString(totalRaw);
}
