import './App.css';
import Card from './components/Card';
import NavBar from './components/Navbar';
import ContextProvider from './context/NavBarContext';
import { Section, Spacer } from './style/style';
import React from 'react';

function App() {
  return (
    <>
      <ContextProvider>
        <NavBar />
        <Spacer />
        <Section>
          <h1>Wilders Book</h1>
        </Section>
        <Section>
          <Card />
        </Section>
        <Section>
          
        </Section>
      </ContextProvider>
    </>
  );
}

export default App;
