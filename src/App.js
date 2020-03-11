import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatsCards from "./components/CatsCards";
import DogsCards from "./components/DogsCards";
function App() {
  return (
    <>
    <div className="App">
<CatsCards />
<DogsCards />
    </div>
    </>
  );
}

export default App;
