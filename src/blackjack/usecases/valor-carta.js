/**
 * Esta funcion calcula el valor numerico de un string pasado por parametro.
 * @param {string} carta Ej: 'C','D','H','S';
 * @returns {number} Retorna el valor numerico de la carta.
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}