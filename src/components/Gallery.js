import React, {useEffect, useState} from 'react';
import '../App.css';
import Album from "./Album";
// import logo from '../logo.svg'
import {connect} from "react-redux";
import {getAlbum, getAlbumByNumber } from "../redux/actions";


function Gallery(props){

    const [num, setNum] = useState(1);

    useEffect(()=> {
        props.getFirstAlbum()
    }, [])

    const goToAlbum = (num) => {
        setNum(num);
    }

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

    const showAlbums = props.allImages.filter(el=> el.albumId===num);


    const showPhotos = showAlbums.map(el=>  <Album key={el.id} photo={el}/>);

    return (
        <div><div style={{display: "inline-flex", verticalAlign: "center", marginBottom: '30px'}}>
                <button className='button' onClick={()=>nextAlbum('-')}>&#8592;</button>&nbsp;&nbsp;
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
const mapStateToProps = (state) => ({
    allImages: state.allImages,
})
const mapDispatchToProps = (dispatch) => ({
    getFirstAlbum: () => dispatch(getAlbum()),
    getAlByNumber: (payload) => dispatch(getAlbumByNumber(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
