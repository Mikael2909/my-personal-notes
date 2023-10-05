import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';
// import style
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = createRoot(document.getElementById('root'));
root.render(<Main />
);