import classes from "./Navbar.module.css";
import WaitlistButton from "./WaitlistButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.logo_container}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={classes.logo_container}>
          <WaitlistButton />
        </div>
      </div>
    </nav>
  );
}
