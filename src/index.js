import React from 'react';
import reactDOM from 'react-dom';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import './Css/styles.css'

reactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));