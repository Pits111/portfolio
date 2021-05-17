import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Contact from './components/Contact';

function App() {

  const myStyle={
  }

  return (
    <div className="App">
          <Navbar/>
        <Route exact path="/" component={Intro} />
        <Route exact path="/Home" component={Intro} />
        <Route path="/Portfolio" />
        <Route path="/Contact" component={Contact}/>
   
      
    </div>
  );
}

export default App;
