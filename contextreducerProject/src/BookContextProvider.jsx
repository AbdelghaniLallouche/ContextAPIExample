import { createContext, useEffect, useReducer} from "react";
import { getData } from "./helper";

export const BookContext = createContext();
const BookContextProvider = (props) => {

    const bookReducer = (state , action) =>{
     switch(action.type){
      case "ADD_BOOK":
         return [...state , {id : action.id , title : action.title , author : action.author}]
      default:
        return state;
     }
    }

    const [books , dispatch] = useReducer(bookReducer , getData('books'))

    useEffect(()=>{
    localStorage.setItem('books' , JSON.stringify(books))
    } , [books])
    
    return ( 
    <BookContext.Provider value={{books , dispatch}}>
         {props.children}
    </BookContext.Provider>
     );
}
 
export default BookContextProvider;