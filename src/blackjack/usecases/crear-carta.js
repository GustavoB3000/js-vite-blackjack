/**
 * Esta funcion crea una carta.
 * @param {string} carta Carta a renderizar.
 * @returns {HTMLElement} Retorna la carta a renderizarse.
 */
export const crearCarta = (carta) =>{
    if(!carta) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}        