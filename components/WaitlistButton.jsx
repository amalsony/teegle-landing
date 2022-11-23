import classes from "./WaitlistButton.module.css";
import Script from "next/script";

export default function WaitlistButton({ type }) {
  return (
    <a
      className={type === "gold" ? classes.gold : classes.button}
      target="_blank"
      rel="noreferrer"
      href="https://oay0uma7h4g.typeform.com/to/Wubk9wwD"
    >
      <span className={classes.text}>Join the waitlist</span>
    </a>
  );
}
