import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import IDAuth from "./components/IDAuth";
import SubmitSuccess from "./components/SubmitSuccess";
import SubmitIDSuccess from "./components/SubmitIDSuccess";
import LandingPage from "./components/LandingPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./components/RegisterForm";
import config from "./config/front_config";

function App() {
    return (
        <Router>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">ID Authenticate</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={config.api.verifyID}>
                        ID Auth
                    </Nav.Link> */}
                </Nav>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/success" children={<SubmitSuccess />} />
                <Route path="/idsuccess" children={<SubmitIDSuccess />} />
                <Route path={config.api.verifyID} children={<IDAuth />} />
                <Route path="/submit" children={<RegisterForm />} />
                <Route path="/" children={<LandingPage />} />
            </Switch>
        </Router>
    );
}

export default App;
