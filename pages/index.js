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
          content=" Teegle brings the three things students do to learn onto one platform. Watch courses, ask questions and practice problems, all in one
            place, with Communities, Decks and Courses."
        ></meta>
        <meta
          name="keywords"
          content="Teegle, Teegle App, learning social network"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/logo.png" />
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
