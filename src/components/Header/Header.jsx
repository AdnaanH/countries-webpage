import "./Header.css"
import DarkModeToggle from "../DarkMode/DarkMode";

const Header = () => {
  return (
    <>
      <header className="header">
          <h1>Where in the world?</h1>
          <DarkModeToggle />
      </header>
    </>
  )
}

export default Header