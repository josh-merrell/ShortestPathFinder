/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';
 import App from './App.jsx';
 import store from './store';
 import styles from './styles.css';
 import { BrowserRouter, Routes, Route, } from 'react-router-dom';

 render(
   <Provider store={store}>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<App/>} />
         <Route path='/api/' element={<App/>} />
         <Route path='/api/maps' element={<App/>} />
       </Routes>
       {/* <App /> */}
     </BrowserRouter>
   </Provider>,
   document.getElementById('contents')
 );
 
 
 