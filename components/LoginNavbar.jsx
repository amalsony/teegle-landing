import classes from "./LoginNavbar.module.css";
import LoginButton from "../layout/navigation/LoginButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.logo_container}>
          <img src="/logo.png" alt="logo" className={classes.logo} />
        </div>
        <div className={classes.logo_container}>
          <LoginButton value={"login"} page={"login"} />
          <span className={classes.sign_up_button}>
            <LoginButton page={"login"} />
          </span>
        </div>
      </div>
    </nav>
  );
}
