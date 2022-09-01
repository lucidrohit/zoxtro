
const Hamburger = ({activeHam, setActiveHame}) => {

    const handleHam = () => {
        setActiveHame(!activeHam)
    }

    return (
        <div className={`hamburger hamburger--spin ${activeHam ? " is-active" : " "}`} type="button" onClick={() => handleHam()}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </div>
    )
}

export default Hamburger