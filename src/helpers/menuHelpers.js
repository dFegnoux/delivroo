/**
 * Format menus from delivroo into an array of categories
 * @param {Object} categories : Categories of the menus
 * @returns a collection of categories
 */
export const formatMenus = categories =>
  Object.entries(categories).filter(category => category[1].length);
