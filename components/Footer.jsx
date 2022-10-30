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
              href="mailto:amal@teegle.app"
              rel="noreferrer"
              target="_blank"
              className={classes.para}
            >
              amal@teegle.app
            </a>
            <a
              href="mailto:nandha@teegle.app"
              rel="noreferrer"
              target="_blank"
              className={classes.para}
            >
              nandha@teegle.app
            </a>
          </div>
          {/* <div className={classes.section}>
            <h3 className={classes.title}>Advertise On Teegle</h3>
            <p className={classes.para}>
              {" "}
              Advertise to the most engaged audience on the internet. Gen Z.
              Email us at{" "}
              <a
                href="mailto:amal@teegle.app"
                rel="noreferrer"
                target="_blank"
                className={classes.para_bold}
              >
                advertise@teegle.app
              </a>
            </p>
          </div> */}
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/TeegleApp"
              className={classes.para}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
