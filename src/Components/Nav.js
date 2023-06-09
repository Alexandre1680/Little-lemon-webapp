import "./Nav.css"

function Nav(props){
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Menu'>Menu</a></li>
                    <li><a href='#Reservations'>Reservations</a></li>
                    <li><a href='#Order'>Order Online</a></li>
                    <li><a href='#Login'>Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;