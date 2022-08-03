import { Link } from "react-router-dom"

const Navbar = ({ mode, toggleMode }) => {
    return (
        <nav className={`navbar  navbar-expand-lg navbar-${mode} bg-${mode}  `}>
            <div className="container-fluid  ">
                <div className="Navbar__links navbar-collapse  " id="navbarSupportedContent">
                    <Link className="navbar-brand " to="/">Text-Utilis</Link>
                    <div className="Navbar__links">
                        <div className="">
                            <ul className="navbar-nav nav__ul me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item ml-3 mb-lg-0"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item ml-3 mb-lg-0"><Link className="nav-link" to="/about">About</Link></li>
                            </ul>
                        </div>
                        <div className={`form-check form-switch  text-${mode ? "light" : "dark"}`}>
                            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar