import React,{useState} from 'react';
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Work from './components/Work';
import "../src/styles/responsive.css"



function App() {
  const [openmenu, setopenmenu] = useState(false)

  return (
    <div className="app">
      <Menu openmenu={openmenu} setopenmenu={setopenmenu}/>
      <Home/>
      <Work/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
