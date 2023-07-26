import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../auth/xtra";
import { logOutAction } from "../auth/msgData";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MainHeader = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const clearUnreadData = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    clearUnreadData(logOutAction());
    history.replace("/login");
  };
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          {/* <img src="/weblink.png" alt="Logo"> */}
          <Navbar.Brand href="#home" className="text-primary">
            MyWebLink
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/login"></Nav.Link>
          </Nav>
          <div>
            {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHeader;
