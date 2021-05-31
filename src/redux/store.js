import {applyMiddleware, createStore} from "redux";
import galleryApp from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";



const store = createStore(galleryApp, composeWithDevTools(applyMiddleware(thunk)))

export default store;
