import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../src/styles/App.scss';
import Character from './character';
import Nav from "./nav"
import Episodes from "./episodes"
import Location from "./lugares"
import Home from "./home"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Nav/>
    <Switch>
         
    
          <Route path='/' exact  component={Home}/>
          <Route path='/Protagonistas'  component={Character}/>
          <Route path='/Lugares' component={Location}/>
          <Route path='/Episodios' component={Episodes}/>
      
    
      </Switch>
    
      </BrowserRouter>
      </div>
  

  );
}

export default App;
