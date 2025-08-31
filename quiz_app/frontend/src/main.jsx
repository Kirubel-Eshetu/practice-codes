import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const Root = document.getElementById('root');

ReactDOM.createRoot(Root).render (
    <BrowserRouter>
    <Routes>
        <Route path = "/*" element={<App />} />
    </Routes>
    </BrowserRouter>
)