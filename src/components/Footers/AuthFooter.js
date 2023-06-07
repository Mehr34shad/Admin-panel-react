
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
              © {new Date().getFullYear()} Made with{" "}
            <i className="fa-solid fa-heart" style={{ color: "#ff8787" }}></i>
            {" "}by
            <a
              className="font-weight-bold ml-1"
              href="https://www.target-designer.com/en"
              rel="noopener noreferrer"
              target="_blank"
            >
              Target Designer
            </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
