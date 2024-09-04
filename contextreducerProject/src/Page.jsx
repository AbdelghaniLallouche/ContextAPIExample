import { useContext, useState } from "react";
import { BookContext } from "./BookContextProvider";
import { ThemeContext } from "./ThemeContextProvider";

const Page = () => {
    const {books , dispatch : bookdispatch} = useContext(BookContext);
    const {auth , dispatch : authdispatch} = useContext(ThemeContext);
    const [title , setTitle] = useState("")
    const [author , setAuthor] = useState("")
    return ( 
        <div className="page">
            { auth ? <h2 style={{padding : '10px' , backgroundColor : 'white' , color : 'black'}}>LIGHT MODE :</h2> :
             <h2 style={{padding : '10px' , backgroundColor : 'black' , color : 'white'}}>DARK MODE</h2>}
          <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>author</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book , index) =>(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
            </tbody>
          </table>
          <br />
          <form action="post" onSubmit={(event) => {
            event.preventDefault();
            bookdispatch({type : 'ADD_BOOK' , id : 1 , title : title , author : author})
            setTitle('')
            setAuthor('')
          }}>
            <input type="text" name="title" placeholder="book title :" required value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <input type="text" name="author" placeholder="book author :" required value={author} onChange={(e)=>{
                setAuthor(e.target.value)
            }}/>
            <button type="submit">add book</button>
          </form>
          <button onClick={()=>{
            authdispatch({type : "TOGGLE_THEME"})
          }}>toggle theme</button>
        </div>
     );
}
 
export default Page;