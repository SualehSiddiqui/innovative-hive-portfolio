import { Container } from "react-bootstrap";
import "./style.css";
import Logo from "../../Assets/logo.png";


const Navbar = () => {

    return (
        <>
            <header>
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