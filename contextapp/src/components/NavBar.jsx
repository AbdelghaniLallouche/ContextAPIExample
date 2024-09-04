import React, {useContext } from 'react';
import { Themecontext } from '../contexts/ThemeContext';
const NavBar = () => {
    const {islightmode , light , dark} = useContext(Themecontext)
    const mode = islightmode ? light : dark ;
    return ( 
        <div className="navbar" style={{backgroundColor : mode.bg , color : mode.ctext}}>
        <h2>BookApp</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
     );
}
 
export default NavBar;
