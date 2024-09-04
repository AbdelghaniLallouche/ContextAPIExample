import BookContextProvider from "./BookContextProvider"
import Page from "./Page"
import ThemeContextProvider from "./ThemeContextProvider"

function App() {
  return (
    <div className="container">
       <ThemeContextProvider>
          <BookContextProvider>
             <Page />
          </BookContextProvider>
       </ThemeContextProvider>
    </div>
  )
}

export default App
