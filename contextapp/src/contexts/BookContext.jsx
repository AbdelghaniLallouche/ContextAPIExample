import { createContext, useState } from "react";

export const BookContext = createContext()
const BookContextProvider = (props) => {
    const [books , setBooks] = useState([
        {id : 1 , book : "the hobbits" } , 
        {id : 2 , book : "louai boudrahem bakaru" } , 
        {id : 3 , book : "el hadmi samurai" } , 
        {id : 4 , book : "majid el kahwi" }
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;