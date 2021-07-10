import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import appReducer from '../reducers/reducers'
import { getFirebase,reduxReactFirebase,firebaseReducer } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config"


const Allreducers =combineReducers({
    userState:appReducer,
    firebasestate: firebaseReducer,
})


export const store = createStore(Allreducers,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));