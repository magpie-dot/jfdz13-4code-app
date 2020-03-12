import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatsCards from "./components/Animals/CatsCards";
import DogsCards from "./components/Animals/DogsCards";
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
