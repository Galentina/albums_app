import React, { useState } from 'react';
import '../App.css';
import Album from "./Album";
import {useAlbums} from "../hooks/useAlbums";

export const Gallery = () => {
    const [num, setNum] = useState(1);
    const { allImages } = useAlbums();

    const nextAlbum = (n) => {
        switch(n){
            case '+': {(num < 100) ?
                setNum(num + 1) : setNum(100);
                break;
            }
            case '-': {(num > 1) ? setNum(num-1) : setNum(1); break;}
            default: setNum(1)
        }
    }

    const previousAlbum = (n) => {
        (num > 1) ? setNum(num-1) : setNum(1);
    }


    const showPhotos = allImages?.filter(el=> el.albumId===num).map(el=>  <Album key={el.id} photo={el}/>)

    return (
        <div className='container'>
            <div className='albums-header'>
                <button className='button' onClick={()=>previousAlbum('-')}>&#8592;</button>&nbsp;&nbsp;
                <h1>Album {num}</h1>&nbsp;&nbsp;
                <button className='button' onClick={()=>nextAlbum('+')}>&#8594;</button>
            </div>
            <br/>
            <div className='mainDiv'>
                {showPhotos}
            </div>
        </div>
    )
}

