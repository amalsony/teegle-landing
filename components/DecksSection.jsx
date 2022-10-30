import classes from "./DecksSection.module.css";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimenions";
import Image from "next/image";

export default function DecksSection() {
  const [toggleValue, setToggleValue] = useState("for learners");

  const { width } = useWindowDimensions();

  return (
    <section className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.text}>
          <h1 className={classes.title}>
            <span className={classes.svg_container}>
              {width > 768 ? (
                <svg
                  width="69"
                  height="71"
                  viewBox="0 0 69 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="4.74658"
                    width="46.6482"
                    height="61.5429"
                    rx="4.4193"
                    fill="#E157C3"
                  />
                  <rect
                    x="23.2361"
                    width="46.6482"
                    height="61.5429"
                    rx="4.4193"
                    transform="rotate(14 23.2361 0)"
                    fill="#DF21B5"
                  />
                </svg>
              ) : (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.766968"
                    y="2.40674"
                    width="23.6526"
                    height="31.2048"
                    rx="2.24077"
                    fill="#E157C3"
                  />
                  <rect
                    x="12.5486"
                    width="23.6526"
                    height="31.2048"
                    rx="2.24077"
                    transform="rotate(14 12.5486 0)"
                    fill="#DF21B5"
                  />
                </svg>
              )}
            </span>{" "}
            <span className={classes.pink}>Decks.</span> The best way to
            practice what you learned.
          </h1>
        </div>
        <div className={classes.toggle_container}>
          <button
            className={
              toggleValue === "for learners" ? classes.button_active : ""
            }
            onClick={() => setToggleValue("for learners")}
          >
            For learners
          </button>
          <button
            className={
              toggleValue === "for creators" ? classes.button_active : ""
            }
            onClick={() => setToggleValue("for creators")}
          >
            For creators
          </button>
        </div>
        {toggleValue === "for learners" ? (
          <div className={classes.image_container}>
            <img src="/decks.png" alt="" className={classes.decks} />
          </div>
        ) : (
          <div className={classes.creator_container}>
            <img
              src="/single deck.png"
              alt=""
              className={classes.creator_deck}
            />
            <div className={classes.feature_container}>
              <div className={classes.feature}>
                <div className={classes.feature_svg_container}>
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.7312 18.4812C39.2796 16.0296 34.9654 14.3272 31 14.2187M20.2688 41.7312C22.5757 44.8053 26.8615 46.5568 31 46.7067M31 14.2187C26.2828 14.0921 22.0591 16.2285 22.0591 22.0565C22.0591 32.7877 41.7312 27.4221 41.7312 38.1532C41.7312 44.2757 36.4947 46.903 31 46.7041M31 14.2187V7.75M31 46.7067V54.25"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3>
                  <span className={classes.black}>Monetize Decks.</span> Have
                  them be discovered in Communities. Or embed them on your
                  website; hosted by Teegle. No code needed.{" "}
                </h3>
              </div>
              <div className={classes.feature}>
                <div className={classes.feature_svg_container}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_408)">
                      <path
                        d="M28 37.2587L37.9097 42.8051L35.6953 31.6681L44.0323 23.9564L32.7553 22.6194L28 12.3084V37.2587ZM28 42.6067L11.543 51.8187L15.218 33.3201L1.36967 20.5147L20.0993 18.2934L28 1.16675L35.9007 18.2934L54.6303 20.5147L40.782 33.3201L44.457 51.8187L28 42.6067Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_408">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <span className={classes.black}>Fully Interactive. </span> The
                  tests your customers write aren’t just multiple-choice and
                  neither should your questions be. Decks support advanced free
                  response.{" "}
                </h3>
              </div>
              <div className={classes.feature}>
                <div className={classes.feature_svg_container}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_413)">
                      <path
                        d="M41.629 36.5376L42.0397 36.9506L42.455 36.5376C42.9425 36.0501 43.5213 35.6634 44.1582 35.3995C44.7952 35.1357 45.4779 34.9999 46.1673 34.9999C46.8568 34.9999 47.5395 35.1357 48.1764 35.3995C48.8134 35.6634 49.3922 36.0501 49.8797 36.5376C50.3672 37.0251 50.7539 37.6039 51.0177 38.2408C51.2816 38.8778 51.4174 39.5605 51.4174 40.2499C51.4174 40.9394 51.2816 41.6221 51.0177 42.259C50.7539 42.896 50.3672 43.4747 49.8797 43.9622L42.0397 51.7999L34.2043 43.9622C33.2198 42.9777 32.6666 41.6423 32.6666 40.2499C32.6666 38.8575 33.2198 37.5222 34.2043 36.5376C35.1889 35.553 36.5243 34.9999 37.9167 34.9999C39.3091 34.9999 40.6444 35.553 41.629 36.5376ZM28 32.6666V51.3333H9.33334C9.33339 46.4836 11.2209 41.8243 14.5961 38.3419C17.9713 34.8596 22.5694 32.8275 27.4167 32.6759L28 32.6666ZM28 2.33325C35.735 2.33325 42 8.59825 42 16.3333C42 24.0683 35.735 30.3333 28 30.3333C20.265 30.3333 14 24.0683 14 16.3333C14 8.59825 20.265 2.33325 28 2.33325Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_413">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>
                  <span className={classes.black}>
                    We’ll do the coding so you can focus on making the best
                    questions.{" "}
                  </span>{" "}
                  With Decks, you no longer have to create your own flashcards,
                  simply drag and drop on Teegle.{" "}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
