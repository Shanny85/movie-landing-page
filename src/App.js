import {useEffect} from "react";
import Aos from 'aos';
import './App.css';

import Header from "./Components/Header/Header";
import Hero from "./Components/UI/Hero";
import About from "./Components/UI/About";
import Contact from "./Components/UI/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    useEffect(()=>{
        Aos.init();
    },[]);

  return (
      <div className="App">
          <Header/>
          <main>
              <Hero/>
              <About/>
              <Contact/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
