import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFilterVintage} from 'react-icons/md';
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';  //we change icon color using context Api (it sure that we pass data to every thing that wrapped)
                                             // It's like a global style
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>  
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to= '/' className='navbar-logo' onClick={closeMobileMenue}>
                     <MdFilterVintage className='navbar-icon'/>
                        PANEMA
                     </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className= {click? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                                DASHBOARD
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cassa' className='nav-links' onClick={closeMobileMenue}>
                                CASSA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/agenda' className='nav-links' onClick={closeMobileMenue}>
                                AGENDA
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/promozioni' className='nav-links' onClick={closeMobileMenue}>
                                PROMOZIONI
                            </Link>
                        </li>

                        <li className='nav-btn'>
                          {button? (
                            <Link to='/sign-up' className='btn-link'>
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                          ):(
                            <Link to='/sign-up' className='btn-link' onClick={closeMobileMenue}>
                                <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>SIGN UP</Button>
                            </Link>
                          )}
                        </li>

                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;
