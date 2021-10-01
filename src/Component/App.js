import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Home from "../Component/pages/Home";
import SignUp from "../Component/pages/SignUp";
import Login from "../Component/pages/Login";
import Quiz from "../Component/pages/Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <PublicRoute
                exact
                path="/signup"
                component={SignUp}
              ></PublicRoute>
              <PublicRoute exact path="/login" component={Login}></PublicRoute>
              <PrivateRoute
                exact
                path="/quiz/:id"
                component={Quiz}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/result"
                component={Result}
              ></PrivateRoute>
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
