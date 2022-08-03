import { Link } from "react-router-dom"

const Navbar = ({ mode, toggleMode }) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}  `}>
            <div className="container-fluid ">
                <Link className="navbar-brand " to="/">Text-Utilis</Link>
                <div className="navbar-collapse Navbar__links" id="navbarSupportedContent">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${mode ? "light" : "dark"}`}>
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar