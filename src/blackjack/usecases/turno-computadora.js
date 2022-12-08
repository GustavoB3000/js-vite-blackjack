import {pedirCarta} from './pedir-carta'
import {valorCarta} from './valor-carta'
import {crearCarta} from './crear-carta'

/**
 * Esta funcion renderiza las cartas y puntos obtenidos por la computadora.
 * @param {number} puntosMinimos Puntos minimos que necesita la computadora para ganar.
 * @param {HTMLElement} puntosHTML Elemento html donde se renderizaran los puntos.
 * @param {HTMLElement} divCartasComputadora Elemento html donde se renderizaran las cartas.
 * @param {Array<string>} deck El mazo.
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck ) => {

    if(!puntosMinimos) throw new Error('puntosMinimos es necesario.');
    if(!puntosHTML) throw new Error('puntosHTML es necesario.');

    let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        divCartasComputadora.append( crearCarta(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}