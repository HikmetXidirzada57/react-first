import logo from './logo.svg';
import './App.scss'; 
import {useState} from "react";
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import { MyRouter } from './config/MyRouter';
 
function App() {
 
  return (
    <div className="App">
      <Header/>
      <MyRouter/>
      <Footer/>
   
    </div>
  );
}

export default App;
