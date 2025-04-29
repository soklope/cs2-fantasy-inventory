const rarityOrder = [
    "#b0c3d9", // Consumer Grade (Lightest Gray)
    "#5e98d9", // Industrial Grade (Light Blue)
    "#4b69ff", // Mil-Spec (Blue)
    "#8847ff", // Restricted (Purple)
    "#d32ce6", // Classified (Pink)
    "#eb4b4b"  // Covert (Red)
];

/**
 * Sorts an array of skins by rarity color, in ascending or descending order.
 * @param {Array} skinArray - The array of skins to sort.
 * @param {'asc' | 'desc'} order - The sort order. Default is 'asc'.
 */
export default function sortByRarity(skinArray = [], order = 'asc') {
    const sorted = [...skinArray].sort((a, b) => {
        const indexA = rarityOrder.indexOf(a.rarityColor || a.rarity);
        const indexB = rarityOrder.indexOf(b.rarityColor || b.rarity);
        const safeIndexA = indexA === -1 ? Infinity : indexA;
        const safeIndexB = indexB === -1 ? Infinity : indexB;

        return safeIndexA - safeIndexB;
    });

    return order === 'desc' ? sorted.reverse() : sorted;
}
