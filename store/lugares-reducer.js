import { ADD_PLACE } from './places-actions'
import Lugar from '../modelo/Lugar'
const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action) {
        case ADD_PLACE:
            //lógica aqui
            const novoLugar = new Lugar(new Date().toString(), action.placeData.title);
            return {
                lugares: estado.lugares.concat(novoLugar)
            }
        default:
            return state;
    }
}