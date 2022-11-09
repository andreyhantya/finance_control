import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
import { store } from './store/store'
import { Provider } from 'react-redux'

root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
);
