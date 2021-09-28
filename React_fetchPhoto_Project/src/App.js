import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import {Switch, Route } from "react-router-dom"; 
import "./styles/style.css";



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about" exact />
         <Homepage />         
        <Route path="/" exact />
         <About />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
