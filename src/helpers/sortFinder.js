const rarityOrder = [
    "#5e98d9",  // light blue
    "#4b69ff", // blue
    "#8847ff", // purple
    "#d32ce6", // pink/purple
    "#eb4b4b" // red
];

/**
 * Sorts an array of skins by rarity color, in ascending or descending order.
 * @param {Array} skinArray - The array of skins to sort.
 * @param {'asc' | 'desc'} order - The sort order. Default is 'asc'.
 */
export default function sortByRarity(skinArray = [], order = 'asc') {
    const sorted = [...skinArray].sort((a, b) => {
        const indexA = rarityOrder.indexOf(a.rarity.color || a.rarity);
        const indexB = rarityOrder.indexOf(b.rarity.color || b.rarity);
        const safeIndexA = indexA === -1 ? Infinity : indexA;
        const safeIndexB = indexB === -1 ? Infinity : indexB;

        return safeIndexA - safeIndexB;
    });

    return order === 'desc' ? sorted.reverse() : sorted;
}
