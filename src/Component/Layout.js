import Nav from "../Component/Nav";
import classes from "../styles/Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
