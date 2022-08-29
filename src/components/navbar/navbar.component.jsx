import "./navbar.styles.scss"
import Logo from "../../assets/logo.svg"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"


const NavBar = () => {
    const [contact, setContact] = useState(false)
    const [activeHam, setActiveHame] = useState(false)

    const handleHam = () => {
        setActiveHame(!activeHam)
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/" >
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="navbar__nav_section">
                    <ul className={activeHam ? " is-active" : " "}>
                        <li className={!contact ? " active" : " "}>
                            <Link to="/" onClick={()=>setContact(false)}>About{'\u00A0'}</Link>
                        </li>
                        <li className={contact ? " active" : " "}>
                            <Link to="/contact" onClick={()=>setContact(true)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div class={`hamburger hamburger--spin ${activeHam ? " is-active" : " "}`} type="button" onClick={() => handleHam()}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar