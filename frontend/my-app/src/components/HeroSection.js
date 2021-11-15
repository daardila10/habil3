import React from 'react';
// import images from '..components/images';
import {Button} from './Button';
import './HeroSection.css';
import './pages/App.css';
// import GoogleLogin from 'react-google-login';


function HeroSection() {
   /*  const respuestaGoogle=(respuesta) =>{
        console.log(respuesta); */
    
    return (
        <div className='hero-container'>
            <img src={"images/pexelwe.jpeg"} alt={""}></img>
            <div className="texto"><h1>ADVENTURE AWAITS</h1>
            <p> What are you waiting for?</p>
            <div className= "hero-btns">
               <Button className='btns' buttonSytle='btn--outline'
               buttonSize='btn--large'>
                   GET STARTED
               </Button>
               <Button className='btns' buttonSytle='btn--primary'
               buttonSize='btn--large'>
                   WATCH TRAILER <i className='far fa-play-circle'/>
               </Button>
               <div className="App">
       {/*    <GoogleLogin
        clientId="255453408130-kbmmio2iufn8oo0ofh54e84ra027afr1.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />, */}
          

       </div>

               </div>
             </div>
            
        </div>
    )
}

export default HeroSection
