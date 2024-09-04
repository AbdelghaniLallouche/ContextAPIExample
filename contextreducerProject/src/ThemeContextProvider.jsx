import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext(); 
const ThemeContextProvider = (props) => {
    const authReducer = (state , action) =>{
        switch(action.type){
            case "TOGGLE_THEME":
                return !state;
            default:
                return state;
        }
    } 
    const [auth , dispatch] = useReducer(authReducer , true)
    return ( 
        <ThemeContext.Provider value={{auth , dispatch}}>
       {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;