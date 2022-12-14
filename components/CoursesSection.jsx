import classes from "./CoursesSection.module.css";
import WaitlistButton from "./WaitlistButton";
import { useState } from "react";
import Image from "next/image";

export default function CoursesSection() {
  const [toggleValue, setToggleValue] = useState("for learners");

  return (
    <section className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.header}>
          <div className={classes.title_container}>
            <div className={classes.logo_container}>
              <img
                draggable="false"
                src="/premium logo.png"
                alt="logo"
                className={classes.logo}
              />
            </div>
            <h2 className={classes.title}>Premium.</h2>
          </div>
          <h2 className={classes.fade}>The best way to learn.</h2>
        </div>
        <div className={classes.section}>
          <p className={classes.para}>
            Teegle Premium gives you access to unlimited on-demand courses for
            one monthly subscription. Never pay for a course and regret it ever
            again.
          </p>
          <img
            draggable="false"
            className={classes.image}
            src="/course video.png"
            alt=""
          />
        </div>
        <div className={classes.section}>
          <p className={classes.para}>
            Courses built for school learning.{" "}
            <span className={classes.fade_p}>
              Creators can embed Decks in between videos for active learning,
              something only Teegle does, helping you remember what you watched.{" "}
            </span>
          </p>
          <img
            draggable="false"
            className={classes.image}
            src="/decks in courses.png"
            alt=""
          />
        </div>
        {/* <h2 className={classes.pricing}> Try free for 7 days, then $29/mo. </h2> */}
        <div className={classes.image_container}>
          <img
            draggable="false"
            className={classes.course_image}
            src="/sketching.png"
            alt=""
          />
          <img
            draggable="false"
            className={classes.course_image}
            src="/us history.png"
            alt=""
          />
          <img
            draggable="false"
            className={classes.course_image}
            src="/gravitation.png"
            alt=""
          />
          <img
            draggable="false"
            className={classes.course_image}
            src="/calculus.png"
            alt=""
          />
        </div>
        <p className={classes.ending_para}>
          Unlimited knowledge for less than the price of a cup of coffee a day.
        </p>
        <div className={classes.button}>
          <WaitlistButton type={"gold"} />
        </div>
      </div>
    </section>
  );
}
