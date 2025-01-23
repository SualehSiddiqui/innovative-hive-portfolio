import { Container } from "react-bootstrap";
import "./style.css";
import Logo from "../../Assets/logo.png";


const Navbar = () => {

    return (
        <>
            <header>
                <div className="scrolling-text">
                    <p>Click on the image for a better view.</p>
                </div>
                <Container className="nav-conatiner">
                    <p className="logo-div">
                        <img src={Logo} alt="Logo" />
                    </p>
                </Container>
            </header>
        </>
    )
}

export default Navbar;