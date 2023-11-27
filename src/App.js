import './App.css'
import { Navbar, Brand, CTA } from "./components";
import { Blog, Header, Footer, Features, WhatGPT3, Possibility} from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
