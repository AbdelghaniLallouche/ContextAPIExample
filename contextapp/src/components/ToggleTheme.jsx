import React, {useContext } from 'react';
import { Themecontext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
const ToggleButton = () => {
    const {authToggle} = useContext(AuthContext)
   const {toggleMode} = useContext(Themecontext)
    return ( 
        <div className="btn-toggle">
                <button onClick={() => {
                    toggleMode();
                    authToggle();
                }}>toggle the theme</button>
            </div>
     );
}
 
export default ToggleButton;