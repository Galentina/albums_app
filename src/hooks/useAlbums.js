import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAlbum} from "../redux/actions";
import {albumSelector} from "../redux/albumSelector";


export const useAlbums = () => {;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbum());
    }, [])

    const { allImages } = useSelector(albumSelector);

    return { allImages }
}
