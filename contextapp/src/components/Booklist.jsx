import React, { useContext } from 'react';
import { Themecontext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

const Booklist = () => {
    const {isAuthontificated} = useContext(AuthContext);
    const {islightmode , light ,dark} = useContext(Themecontext);
    const {books} = useContext(BookContext);
    const mode = islightmode ? light : dark;
    return ( 
        <div className="book-list" style={{backgroundColor : mode.bg , color : mode.ctext}}>
            <div style={{color :'gold'}}>
                {isAuthontificated ? 'logged in' : 'logged out'}
            </div>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                     {book.book}
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Booklist;