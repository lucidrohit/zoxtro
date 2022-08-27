import "./navbar.styles.scss"
import Logo from "../../assets/logo.svg"

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <nav className="navbar__nav_section">
                <ul>
                    <li className="active">About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div></div>
        </div>
    )
}

export default NavBar