import { db } from "./firebase.util"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

import { addDoc, collection } from "firebase/firestore"

const ContactForm = () => {
    const notify = () => toast.success('Successfully Submitted.');

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newMessage, setNewMessage] = useState("")

    const customerCollectionRef = collection(db, "customers")

    const createCustomer = async () => {
        addDoc(customerCollectionRef, { name: newName, email: newEmail, message: newMessage, date: new Date() })
        setNewName("")
        setNewEmail("")
        setNewMessage("")
        notify()
    }


    return (
        <form action="/">
            <Toaster/>
            <h1 className="contact__form__heading">
                GET IN TOUCH WITH US
            </h1>
            <div className="contact__form__input">
                <label htmlFor="name">
                </label>
                <input required type="text" placeholder="Full Name" id="name" name="name" value={newName} onChange={(event) => (setNewName(event.target.value))} />
            </div>
            <div className="contact__form__input">
                <label htmlFor="email">

                </label>
                <input required type="email" placeholder="Email address" id="email" name="email" value={newEmail} onChange={(event) => (setNewEmail(event.target.value))} />
            </div>
            <div className="contact__form__input">
                <label htmlFor="message">
                </label>
                <textarea placeholder="Message" required id="message" value={newMessage} onChange={(event) => (setNewMessage(event.target.value))} />
            </div>
            <button className="btn" type="reset" onClick={() => createCustomer()}>Submit</button>
        </form>
    )

}

export default ContactForm
