import { type NextPage } from "next";
import Head from "next/head";
import Home from "~/components/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codeframes</title>
        <meta
          name="description"
          // TODO: TBD
          content="Codenames but with images (of whatever you want)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
