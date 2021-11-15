import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton= () => {
        if(window.innerWidth <=960){
            setButton(false)
        } else{
            setButton(true);
        }
    };

    useEffect (()=>{
        showButton()

    }, []);


    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
               <div className='navbar-container'>

                 <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>TSystem<i className="fab fa-typo3"/>              
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
               </div>
               
                <ul className={click ? 'nav-menu active':'nav-menu' }>
                    
                <li className='nav-item'>
                  <button onClick={() => loginWithRedirect()} className= 'nav-links-mobile'>
                        Login
                        </button>
                        </li>
                  <li className='nav-item'>
                    <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                    <Link to='/employees' className= 'nav-links' onClick={closeMobileMenu}>
                        Adm. Ventas
                        </Link>
                        </li>
                    <li className='nav-item'>
                    <Link to='/formulario' className= 'nav-links' onClick={closeMobileMenu}>
                        Adm. Producto
                        </Link>
                        </li>
                        <li className='nav-item'>
                    <Link to='/gestion' className= 'nav-links' onClick={closeMobileMenu}>
                        Gestion Usuario
                        </Link>
                        </li>
                       
                    
                        <li className='nav-item'>
                  <button onClick={() => logout({ returnTo: window.location.origin })} className= 'nav-links-mobile'>
                        Logout
                        </button>
                        </li>
                        
                </ul>  
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
            </nav>
        </>
    );
}

export default Navbar
