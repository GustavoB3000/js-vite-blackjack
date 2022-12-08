/**
 * Esta funcion solicita una carta al mazo creado, comprobado la existencia de cartas en dicho mazo.
 * @param {Array<string>} deck Ej: ['C','D','H','S'];
 * @returns {string} Retorna una carta del mazo.
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}