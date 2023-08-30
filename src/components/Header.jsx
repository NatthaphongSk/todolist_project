import "./Header.scss"
import Search from "./Search"
import { GoTasklist } from "react-icons/go";

function Header(){
    return(
        <header className="header">
          <div className="header__logo">
            <GoTasklist />
          </div>
          <div className="header__text">
            <h1>My-Todolist</h1>
          </div>
          <div className="header__search">
            <Search/>
          </div>
        </header>
    )
}

export default Header