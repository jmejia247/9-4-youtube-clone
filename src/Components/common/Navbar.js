import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <article>
                <h1>
                    <Link to="/">Youtube</Link>
                </h1>
            </article>
            <article>
                <h1>
                    <Link to="/">Home</Link>
                </h1>
            </article>
            <article>
                <h1>
                    <Link to="/">About</Link>
                </h1>
            </article>

        </div>
    )
}

export default Navbar;