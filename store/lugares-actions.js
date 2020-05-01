export const ADD_LUGAR = 'ADD_LUGAR';

export const addLugar = titulo => {
    return {
        type: ADD_LUGAR, placeData: { title: title }
    }
}