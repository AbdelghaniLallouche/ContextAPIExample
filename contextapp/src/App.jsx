import Booklist from "./components/Booklist"
import NavBar from "./components/NavBar"
import ToggleButton from "./components/ToggleTheme"
import AuthContextProvider from "./contexts/AuthContext"
import BookContextProvider from "./contexts/BookContext"
import ThemeContextProvider from "./contexts/ThemeContext"

function App() {
  return (
    <div className="home">
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ToggleButton />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
