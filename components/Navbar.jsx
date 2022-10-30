import classes from "./Navbar.module.css";
import WaitlistButton from "./WaitlistButton";

export default function Navbar() {
  return (
    <nav className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.logo_container}>
          <Image src="/logo.png" alt="logo" className={classes.logo} />
        </div>
        <div className={classes.logo_container}>
          <WaitlistButton />
        </div>
      </div>
    </nav>
  );
}
