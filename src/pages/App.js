import React from "react";
import { Gallery } from "../components/Gallery";
import '../App.css';
import { Footer } from "../components/Footer";


export const App = () => {


    return (
        <div className='App'>
            <div className='nav'>
                <h1 >All Albums</h1>
            </div>
            <Gallery/>
            <Footer/>
        </div>
    );
}


