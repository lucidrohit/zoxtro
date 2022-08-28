import "./home.styles.scss"
import ctaLogo from "../../assets/cta.svg"
const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${ctaLogo})` }} >
            <div className="home__cta"  >
                <div className="home__cta_content">
                    <h1 className="home__cta_content__heading">
                        <p className="home__cta_content__heading_mini">
                            ZOXTRO DESIGNS
                        </p>
                        PROVIDING THE BEST QUALITY ANIME MERCHANDISE WITH THE MOST AESTHETIC DESIGNS
                    </h1>
                    <div>
                        <p className="home__cta_content__tagline">
                            Combining the best embroidery designs with the best quality fabric out there to give you the experience that you deserve.
                                <button className="home__cta_content__tagline__reg_btn">
                                    Pre-register
                                </button>

                        </p>
                    </div>

                </div>
                <div className="home__cta_product">
                </div>
            </div>
            <div className="home__foot">
                <ul>
                    <li></li>
                    <li><a href="https://www.facebook.com/Zoxtro-108315835339179/">Fb</a></li>
                    <li><a href="https://twitter.com/zoxtro">Tw</a></li>
                    <li><a href="https://www.instagram.com/zoxtro/">Ig</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home