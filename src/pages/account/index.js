import Head from "next/head";
import Navigation from "../../components/navigation/Navigation";
import AccountDetails from "../../components/account/AccountDetails";
import Auth from "../../hooks/Auth";
export default function details() {
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
        <Auth />
        <AccountDetails />
      </main>
    </>
  );
}
