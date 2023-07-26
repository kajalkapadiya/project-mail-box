import { useSelector } from "react-redux";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./component/pages/Login";
import MainHeader from "./component/pages/MainHeader";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import ForgotPass from "./component/pages/ForgotPass";
import Mail from "./component/pages/Mail";
import MailView from "./component/pages/MailView";
import Sent from "./component/pages/Sent";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  console.log("this is app component");

  return (
    <>
      <div className="app-container">
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/mailView/" exact>
            <MailView />
          </Route>
          <Route path="/home">
            {isLoggedIn && <Home />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            {isLoggedIn && <About />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/sent">
            <Sent />
          </Route>
          <Route path="/forgot">
            <ForgotPass />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
