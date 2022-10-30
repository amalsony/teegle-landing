import classes from "./CommunitiesSection.module.css";
import useWindowDimensions from "../hooks/useWindowDimenions";

export default function CommunitiesSection() {
  const { width } = useWindowDimensions();

  return (
    <section className={classes.container}>
      {width > 1000 ? (
        <div className={classes.content_container}>
          <div className={classes.image_container}>
            <img src="/SAT Math Post.png" className={classes.image} />
            <img src="/SAT Math Reply.png" className={classes.image} />
          </div>
          <div className={classes.text}>
            <h1 className={classes.title}>
              {" "}
              <div className={classes.fade}>Can’t solve a problem?</div> Teegle
              it.
            </h1>
            <p className={classes.description}>
              On Teegle, you ask your questions in{" "}
              <span className={classes.bold}> Communities.</span> This means
              that unlike when you ask on Brainly, Chegg or anywhere else, your
              question isn’t thrown into a feed of unrelated questions where it
              will never be found.
            </p>
            <p className={classes.description}>
              Communities are filled by people passionate about its subject.
              Your posts are discovered by people who want to browse through it.
            </p>
            <p className={classes.description}>
              <span className={classes.bold}>
                The discoverability of Reddit, but more personal, with the
                functionality of a learning platform.{" "}
              </span>
              So you can finally reply to posts with images of your notebook, or
              type out a math equation without messy brackets.
            </p>
          </div>
        </div>
      ) : (
        <div className={classes.content_container}>
          <h1 className={classes.title}>
            {" "}
            <div className={classes.fade}>Can’t solve a problem?</div> Teegle
            it.
          </h1>
          <img src="/SAT Math Post.png" className={classes.image} />
          <p className={classes.description}>
            On Teegle, you ask your questions in{" "}
            <span className={classes.bold}> Communities.</span> This means that
            unlike when you ask on Brainly, Chegg or anywhere else, your
            question isn’t thrown into a feed of unrelated questions where it
            will never be found.
          </p>
          <p className={classes.description}>
            Communities are filled by people passionate about its subject. Your
            posts are discovered by people who want to browse through it.
          </p>
          <img src="/SAT Math Reply.png" className={classes.image} />
          <p className={classes.description}>
            <span className={classes.bold}>
              The discoverability of Reddit, but more personal, with the
              functionality of a learning platform.{" "}
            </span>
            So you can finally reply to posts with images of your notebook, or
            type out a math equation without messy brackets.
          </p>
        </div>
      )}
    </section>
  );
}
