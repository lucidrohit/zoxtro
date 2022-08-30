import "./contact.styles.scss"
import backgroundSvg from "../../assets/contact_bg.svg"
import contactImage from "../../assets/contact.webp"

const Contact = () => {
    return (
        <div className="contact" id="contact" style={{ backgroundImage: `url(${backgroundSvg})` }} >
            <div className="contact__content" >
                <img src={contactImage} alt="Contact" />
            </div>
            <div className="contact__form">

                <form action="/" method="post">
                    <h1 className="contact__form__heading">
                        GET IN TOUCH WITH US
                    </h1>
                    <div className="contact__form__input">
                        <label htmlFor="name">
                        </label>
                        <input required type="text" placeholder="Full Name" id="name" name="name" />
                    </div>
                    <div className="contact__form__input">
                        <label htmlFor="email">

                        </label>
                        <input required type="email" placeholder="Email address" id="email" name="email" />
                    </div>
                    <div className="contact__form__input">
                        <label htmlFor="message">
                        </label>
                        <textarea placeholder="Message" required typeof="" id="message" />
                    </div>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact