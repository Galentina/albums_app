import React from 'react';



export default function Album(props){
    const {photo} = props;
    const src = photo.thumbnailUrl;
    const alt = photo.title;



console.log(photo)

    return (
        <div>
                <div className='photo' >
                    <img src={src} alt={alt} /><br/>

                </div>
            <p className='title'>{photo.title}</p>
        </div>
    )
}
