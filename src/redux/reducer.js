const initialState = {
    allImages: [],
    chosenAlbum: null,
}

export const galleryApp = (state=initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_ALBUMS': {
            return {
                ...state,
                allImages: action.payload}
        }
        case 'SET_ALBUM': {
            return {
                ...state,
                chosenAlbum: action.payload}
        }
        default: return state;
    }
}

