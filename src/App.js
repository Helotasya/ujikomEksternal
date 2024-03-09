import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/Menu';
import './components/style/main.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Jakarta from './components/Jakarta';
import Search from './components/Search';
import Footer from './components/Footer';
import Update from './components/crud/Update';
import Create from './components/crud/Create';
import View from './components/crud/View';
import Login from './components/Login';


function App() {
  const username = localStorage.getItem("username")
  return (
    <div className="App">
      <BrowserRouter>
      {username &&
      <Header/>
      }
      <Routes>
        {username ? 
        <>
      <Route index element={<Main/>}/>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='about' element={<AboutUs/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='jakarta' element={<Jakarta/>}></Route>
      <Route path='search' element={<Search/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>
        </>
    : 
    <>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </>
    }
      
      </Routes>
      {username &&
     <Footer/>
      }
      
      </BrowserRouter>
    </div>
  )
}


export default App;
