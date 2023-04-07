import "./Main.css"
import restaurant from "../Asset/restaurant.jpg"
import chefsA from "../Asset/Mario and Adrian A.jpg"
import chefsB from "../Asset/Mario and Adrian b.jpg"

function Main(props){
    return(
        <main>
            <section className="heroSection">
                <div className="heroContainer">
                    <div className="heroDiv">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper pulvinar cursus. 
                            Etiam vehicula velit tempor est auctor, a tincidunt dolor porttitor. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        </p>
                        <button>Reserve a Table</button>
                    </div>
                    <img src={restaurant} alt="The restaurant dining room" />
                </div>
            </section>

            <section className="highlights">
                <div className="highlightContainer">
                    <div className="specialsHeading">
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className="cardSpecial">
                        {/* Cards for the special menu goes here */}
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonialContainer">
                    <div className="testimonialHeading">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="cardReview">
                        {/* Cards for the reviews goes here */}
                    </div>
                </div>
            </section>

            <section className="about">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper pulvinar cursus. 
                        Etiam vehicula velit tempor est auctor, a tincidunt dolor porttitor. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </p>
                    <div className="aboutImg">
                        <img id="chef1" src={chefsA} alt="about the Chefs 1" />
                        <img id="chef2" src={chefsB} alt="about the Chefs 2" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;