import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import SubmitSuccess from "./components/SubmitSuccess";
import SubmitIDSuccess from "./components/SubmitIDSuccess";
import LandingPage from "./components/LandingPage";
import RegisterForm from "./components/RegisterForm";
import AdminPage from "./components/AdminPage";
import LoginPage from "./components/LoginPage";
import config from "./config/front_config";
import UpdateUser from "./components/UserUpdatePage";
import VerificationBase from "./components/VerificationBase";
import UserPhoto from "./components/UserPhoto";
import UserId from "./components/UserId";
import VerificationSuccess from "./components/VerificationSuccess";
import IDAuth from "./components/IDAuth";
import About from "./components/About";
import Privacypolicy from "./components/Privacypolicy";
import TermsOfUse from "./components/TermsOfUse";
import TermsAndConditions from "./components/TermsAndConditions";

const AuthRoute = ({ children, ...rest }) => {
    const token = localStorage.getItem("authToken");
    return (
        <Route
            {...rest}
            render={({ location }) =>
            token ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/success" children={<SubmitSuccess />} />
                <Route path="/idsuccess" children={<SubmitIDSuccess />} />
                <Route path={config.api.verifyID} children={<VerificationBase />} />
                <Route path="/register" children={<RegisterForm />} />
                <Route path="/login" children={<LoginPage />} />
                <AuthRoute path="/admin/update/:id" children={<UpdateUser />} />
                <AuthRoute path="/admin" children={<AdminPage />} />
                <Route path="/userphoto" children={<UserPhoto />} />
                <Route path="/userid" children={<UserId />} />
                <Route path="/verifisuccess" children={<VerificationSuccess />} />
                <Route path="/idauth" children={<IDAuth />} />
                <Route path="/about" children={<About />} />
                <Route path="/privacypolicy" children={<Privacypolicy />} />
                <Route path="/termsofuse" children={<TermsOfUse />} />
                <Route path="/termsandconditions" children={<TermsAndConditions />} />
                <Route path="/" children={<LandingPage />} />
            </Switch>
        </Router>
    );
}

export default App;
