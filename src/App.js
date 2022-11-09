import './App.css';
{/* import ScrollToTop from "react-scroll-to-top"; */}
import { Home } from './components/Home';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
     {/* <ScrollToTop smooth={true} />   this will show arrow to to go up*/}
    
      <Home/>
      <About/>
      <Timeline/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
