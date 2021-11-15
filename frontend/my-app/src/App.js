import React from 'react';
// import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import Employees from './components/pages/Employees';
import Gestion from './components/pages/Gestion';
import Formulario from './components/pages/Formulario';
import {Prfile} from './components/Profile';






function App() {
  

 

  return (
    
    
        <Router>
                  
                     
                         
                              
                          
                         <Navbar/>
                         <Prfile/>      
                         <Switch>
                           <Route path= '/' exact component={Home} />
                           <Route path= '/profile' exact component={Profile} />
                           <Route path= '/sign-up' exact component={SignUp} />
                           <Route path= '/employees' exact component={Employees} />
                           <Route path= '/gestion' exact component={Gestion} />
                           <Route path= '/formulario' exact component={Formulario} />
                          
                         
                    
                          </Switch>

                       </Router>
                       
                    
                       
              



    
    
   
   
   
  
    
  );
}

export default App;
