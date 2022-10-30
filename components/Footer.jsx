import classes from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content_container}>
        <div className={classes.main_section}>
          <div className={classes.logo_container}>
            <img src="/logo.png" alt="logo" className={classes.logo} />
          </div>
          <h2 className={classes.title}>Teegle</h2>
        </div>
        <div className={classes.section_container}>
          <div className={classes.section}>
            <h3 className={classes.title}>Get in touch</h3>
            <a
              href="mailto:amalsony5@gmail.com"
              rel="noreferrer"
              target="_blank"
              className={classes.para}
            >
              amalsony5@gmail.com
            </a>
          </div>

          <div className={classes.section}>
            <h3 className={classes.title}>Follow Us</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/TeegleLearn"
              className={classes.para}
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
