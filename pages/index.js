import Navbar from "../components/Navbar";
import IntroductionSection from "../components/IntroductionSection";
import CommunitiesSection from "../components/CommunitiesSection";
import DecksSection from "../components/DecksSection";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Teegle | The learning social network</title>
        <meta
          name="description"
          content="Teegle brings the three things students do to learn onto one platform. Watch courses, ask questions and practice problems, all in one
            place, with Communities, Decks and Courses."
        />
        <meta
          name="keywords"
          content="Teegle, Teegle App, learning social network"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Teegle | The Learning Social Network"
        />
        <meta
          name="twitter:description"
          content="Teegle brings the three things students do to learn onto one platform. Watch courses, ask questions and practice problems, all in one
          place, with Communities, Decks and Courses."
        />
        <meta
          name="twitter:image"
          content="https://www.teegle.app/twitter-image.png"
        />
        <link rel="icon" href="/logo_small.png" />
      </Head>
      <Navbar />
      <IntroductionSection />
      <CommunitiesSection />
      <DecksSection />
      <CoursesSection />
      <Footer />
    </>
  );
}
