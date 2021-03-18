import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
//this is used to style my imported icon i.e fabars and fatimes 
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'
import { Nav, 
    NavbarContainer, 
    NavLogo,
     NavIcon,
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavBtnLink,
      NavItemBtn,
      
    } from  './Navbar.element';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick (!click)

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
    
    return (
        <>
           <IconContext.Provider value={{ color: '#fff' }}>
           <Nav>
            
           <NavbarContainer>
           <NavLogo to='/'>
           <NavIcon/>
              TEE-CLOTHIERS
            
           </NavLogo>
               <MobileIcon onClick={handleClick}>
                   {click ? <FaTimes /> : <FaBars />}
               </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks>
                                <NavLinks to='/product'>
                                    Products
                                </NavLinks>
                            </NavLinks>
                        </NavItem>

            <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button  fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
            </NavItemBtn>
                    </NavMenu>
           
           </NavbarContainer>
        
       </Nav>
           </IconContext.Provider>
            
        </ >
    )
}

export default Navbar
