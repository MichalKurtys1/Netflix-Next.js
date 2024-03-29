import Head from "next/head";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";
import Navigation from "../../components/navigation/Navigation";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import TermsOfUse from "../../components/TermsOfUse";

const privacyPolicy = () => {
  return (
    <>
      <Head>
        <title>FilmInc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <TermsOfUse />
        <Footer />
      </main>
    </>
  );
};

export default privacyPolicy;
