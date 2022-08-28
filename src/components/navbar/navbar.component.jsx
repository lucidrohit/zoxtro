import "./navbar.styles.scss"
import Logo from "../../assets/logo.svg"
import { useState } from "react"


const NavBar = () => {

    const [activeHam, setActiveHame] = useState(false)

    const handleHam = ()=>{
        setActiveHame(!activeHam)
    }
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <nav className="navbar__nav_section">
                <ul className={activeHam?" is-active":" "}>
                    <li className="active">
                        <a href="/">About{'\u00A0'}</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
            <div class={ `hamburger hamburger--spin ${activeHam?" is-active":" "}`} type="button" onClick={()=>handleHam()}>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </div>
        </div>
    )
}

export default NavBar