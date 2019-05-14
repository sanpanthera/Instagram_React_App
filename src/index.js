import React from 'react';
import reactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './Redux/Reducer'
import './Css/styles.css'
import {Provider} from 'react-redux'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

reactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));