import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <header className="container">
            <Link to="/">
                <h1>Login</h1>
            </Link>
            <Link to="/signup">
                <h1>Signup</h1>
            </Link>
        </header>
    )
}

export default Navbar;