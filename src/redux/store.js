import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {galleryApp} from "./reducer";


export const store = createStore(galleryApp, composeWithDevTools(applyMiddleware(thunk)))


