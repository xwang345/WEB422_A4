/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: ___Xiaochen Wang_________________ Student ID: _015297153___________ Date: __2018-JUL-06_____________
*
********************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),document.getElementById('root'));
