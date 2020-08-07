import React from 'react';
import Landing from './pages/Landing';

import './assets/styles/global.css';

// Isso abaixo é chamado de componentes. Componentes são funções que retornam um html
// Nome do componente sempre com letra maiuscula
// HTML dentro do JS é chamado de JSX -> JS + XML
// Um componente é muito utilizado para estrutura de loops
function App() {
  return (
    <Landing />
  );
}

export default App;
