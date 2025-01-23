import { Container } from "react-bootstrap";
import "./style.css";
import Logo from "../../Assets/logo.png";
import { useState } from "react";


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    window.addEventListener("scroll", () => {
        // console.log(window.scrollY, window.innerHeight)
        if (window.scrollY > 200) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    });

    return (
        <>
            <header>
                <div className={navbar ? "scrolling-text nav-scrolled" : "scrolling-text"}>
                    <p>Click on the image for a better view.</p>
                </div>
                <Container className="nav-conatiner">
                    <p className="logo-div">
                        <img src={Logo} alt="Logo" />
                    </p>
                </Container>
            </header>
        </>
    );
};

export default Navbar;