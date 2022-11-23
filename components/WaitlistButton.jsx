import classes from "./WaitlistButton.module.css";
import Script from "next/script";

export default function WaitlistButton({ type }) {
  return (
    <a
      className={type === "gold" ? classes.gold : classes.button}
      target="_blank"
      rel="noreferrer"
      href="https://teegle.app"
    >
      <span className={classes.text}>
        {type !== "gold" ? "Go to Teegle" : "Coming Soon"}
      </span>
    </a>
  );
}
