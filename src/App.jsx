import { useState } from 'react';
import React from 'react';
import './assets/css/style.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from "./components/Menu.jsx";
import Products from "./components/Products.jsx";
import Review from "./components/Review.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}

export default App;