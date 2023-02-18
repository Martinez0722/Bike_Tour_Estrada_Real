import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Bot from './components/Bot'
import Carrossel from './components/Carrossel';
import Pacotes from './components/Pacotes';
import Sobre from './components/Sobre';
import Contato from './components/Contato'

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Carrossel />
      <Sobre />
      <Pacotes />
      <Contato />
    </div>
      
  )
}

export default App
