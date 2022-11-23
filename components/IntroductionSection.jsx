import classes from "./IntroductionSection.module.css";

export default function IntroductionSection() {
  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes.introducing_teegle}>Introducing Teegle</h1>
        <h1 className={classes.main_title}>
          The <span className={classes.blue}>learning</span> social network.
        </h1>
        <div className={classes.description_container}>
          <p className={classes.description}>
            <span className={classes.black}>
              Teegle brings the three things students do to learn onto one
              platform.
            </span>{" "}
            Watch courses, ask questions and practice problems, all in one
            place, with
            <div className={classes.product_container}>
              {" "}
              <div className={classes.communities}>Communities</div>,{" "}
              <span className={classes.decks}>Decks</span>, and{" "}
              <span className={classes.courses}>Courses</span>.
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
