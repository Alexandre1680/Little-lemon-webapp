import logo from '../Asset/Logo.svg'
import "./Header.css"

function Header(props){
    return (
        <header>
            <img src={logo} alt="Restaurant Logo" />
        </header>
    )
}

export default Header;