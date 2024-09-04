import React, { Component, createContext } from 'react';
export const AuthContext = createContext();
class AuthContextProvider extends Component {
    state = { 
        isAuthontificated : false
     } 
     authToggle = () =>{
      this.setState({isAuthontificated : !this.state.isAuthontificated})
     }
    render() { 
        return (
           <AuthContext.Provider value={{...this.state , authToggle : this.authToggle} }>
            {this.props.children}
           </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;