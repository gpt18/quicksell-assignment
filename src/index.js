import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './state-management/useStateReducer';
import reducer from './state-management/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StateProvider reducer={reducer} >
        <App />
    </StateProvider>
);

