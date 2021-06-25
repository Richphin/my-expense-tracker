import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import appReducer from '../reducers/reducers'
import { getFirebase,reduxReactFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config"


 


export const store = createStore(appReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));