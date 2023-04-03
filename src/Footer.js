import footerlogo from "./Asset/footerlogo.png"

function Footer(props){
    return(
        <footer>
            <img src={footerlogo} alt="Restaurent Logo" />
            
            <ul>
                <li className="footerHeader">Doormat Navigation</li>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Reservations">Reservations</a></li>
                <li><a href="#Order">Order Online</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>

            <ul>
                <li className="footerHeader">Contact</li>
                <li><a href="#Adress">Adress</a></li>
                <li><a href="#Email">Email</a></li>
                <li><a href="#Phone">Phone</a></li>
            </ul>

            <ul>
                <li className="footerHeader">Social Media</li>
                <li><a href="#Facebook">Facebook</a></li>
                <li><a href="#Instagram">Instagram</a></li>
                <li><a href="#LinkedIn">LinkedIn</a></li>
            </ul>
        </footer>
    )
}
export default Footer;