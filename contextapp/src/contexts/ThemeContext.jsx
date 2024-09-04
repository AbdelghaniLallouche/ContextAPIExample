import React, { Component, createContext } from 'react';
export const Themecontext = createContext()
class ThemeContextProvider extends Component {
    state = { 
      islightmode : true, 
      light : {ctext : '#white', ui : '#ddd' , bg : '#eee' } , 
      dark: {ctext : 'white' , ui : 'black' , bg : 'black'}
     } 

    toggleTheme = () =>{
     this.setState({islightmode: !this.state.islightmode})
     console.log(this.state.islightmode)
     }
    render() { 
        return (
            <Themecontext.Provider value={{...this.state , toggleMode : this.toggleTheme}}>
                {this.props.children}
            </Themecontext.Provider>
        );
    }
}
 
export default ThemeContextProvider;