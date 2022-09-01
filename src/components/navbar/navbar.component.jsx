import "./navbar.styles.scss"
import Logo from "../../assets/logo.svg"
import { useState } from "react"
import Hamburger from "./hamburger.component";


const NavBar = ({ isActive }) => {

    window.history.pushState({}, undefined, (isActive ? "#home" : "#contact"))

    const [activeHam, setActiveHame] = useState(false)


    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="/" >
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <nav className="navbar__nav_section">
                <ul className={activeHam ? " is-active" : " "}>
                    <li id="list-home" className={isActive ? " active" : " "} >
                        <a  href="#home">About{'\u00A0'}</a>
                    </li>
                    <li id="list-contact" className={!isActive ? " active" : " "} >
                        <a  href="#contact" >Contact</a>
                    </li>
                </ul>
            </nav>
            <Hamburger activeHam={activeHam}  setActiveHame={setActiveHame}/>
        </div>
    )
}

export default NavBar