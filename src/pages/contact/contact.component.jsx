import "./contact.styles.scss"
import backgroundSvg from "../../assets/contact_bg.svg"
import contactImage from "../../assets/contact.webp"
import ContactForm from "../../utils/firebase/contact.util"

const Contact = () => {
    return (
        <div className="contact" id="contact" style={{ backgroundImage: `url(${backgroundSvg})` }} >
            <div className="contact__content" >
                <img src={contactImage} alt="Contact" />
            </div>
            <div className="contact__form">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact