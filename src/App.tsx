import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Rotas
import Routes from './routes/routes';

//Styles
import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
