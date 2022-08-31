import "./navbar.styles.scss"
import Logo from "../../assets/logo.svg"
import { useState } from "react"

const NavBar = ({isActive}) => {

    window.history.pushState({}, undefined, (isActive?"#home":"#contact"));

    const [contact, setContact] = useState(false)
    const [activeHam, setActiveHame] = useState(false)


    const handleHam = () => {
        setActiveHame(!activeHam)
    }

    return (

        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <a href="/" >
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <nav className="navbar__nav_section">
                    <ul className={activeHam ? " is-active" : " "}>
                        <li id="list-home" className={isActive ? " active" : " "}>
                            <a href="#home" onClick={() => setContact(false)}>About{'\u00A0'}</a>
                        </li>
                        <li id="list-contact" className={!isActive ? " active" : " "}>
                            <a href="#contact" onClick={() => setContact(true)}>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className={`hamburger hamburger--spin ${activeHam ? " is-active" : " "}`} type="button" onClick={() => handleHam()}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default NavBar