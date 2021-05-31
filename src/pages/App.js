import '../App.css';
import Gallery from "../components/Gallery";
import {connect} from "react-redux";
import React from "react";

function App() {




  return (
    <div className='App'>
        <div className='nav'>
            <h1 style={{float: 'left'}}>Choose your album</h1>

        </div>
      <Gallery />}
    </div>
  );
}

const mapStateToProps = (state) => ({
    allImages: state.allImages,
})


export default connect(mapStateToProps, null)(App)

