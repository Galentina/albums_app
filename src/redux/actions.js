import axios from 'axios';



export const getAlbum = () => {
    return async dispatch => {
        try {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
                .then(res => res.data)
                    dispatch({
                        type: 'GET_ALL_ALBUMS',
                        payload: data,
                    })
        } catch(error) { console.log(error); }
    }
};

export const setNumber = (data) => {

    return {
        type: 'SET_ALBUM',
        payload: data,
    };


}

