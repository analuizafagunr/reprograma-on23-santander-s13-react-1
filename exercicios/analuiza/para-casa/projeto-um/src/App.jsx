import React from 'react';
import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import evangelion from './assets/evangelion.webp';
import cafe from './assets/download.jpeg';

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Card 
        title="Gatinhos" 
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
        image={evangelion} 
        imageAlt="robozinhos legais do Evangelion"
      />
      <Card 
        title="Cafés" 
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
        image={cafe} 
        imageAlt="café da tarde"
      />
      <Footer name="Ana" />
    </>
  );
}

export default App;