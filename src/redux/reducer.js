const initialState = {
    allImages: [],

}

const galleryApp = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_ALBUMS': {

            return {...state, allImages: action.payload}
        }

        default: return state;
    }
}

export default galleryApp;
