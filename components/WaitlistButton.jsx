import classes from "./WaitlistButton.module.css";

export default function WaitlistButton({ type }) {
  return (
    <a className={type === "gold" ? classes.gold : classes.button}>
      <span className={classes.text}>Join the waitlist</span>
    </a>
  );
}
