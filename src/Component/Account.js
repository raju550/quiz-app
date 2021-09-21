import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";
import { useAuth } from "../contexts/AuthContext";
export default function Account() {
  const { currentUser, signout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span class="material-icons-outlined" title="Account">
            account_circle
          </span>
          <h3>{currentUser.displayName}</h3>
          <span
            class="material-icons-outlined"
            title="Logout"
            onClick={signout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
