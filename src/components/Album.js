import React from 'react';


export default function Album(props){
    const {currentAlbum} = props;

console.log(currentAlbum)

    return (
        <div>
                <div className='photo' >
                    <img alt='' /><br/>

                </div>
            <p className='title'>{currentAlbum.title}</p>
        </div>
    )
}
