// TODO: this file needs to be renamed /pages/[game].tsx to be dynamic
// Or maybe the game_id will be a route param - I am not sure yet
// In the meantime, I will build single player gameplay

import { type NextPage } from "next";
import Head from "next/head";
import Game from "~/components/Game";

const GamePage: NextPage = () => {
  return (
    <>
      <Head>
        {/* TODO: dynamic room name */}
        <title>Codeframes | [room name]</title>
        {/* TODO: is <meta> inherited by parent page if not made explicit? */}
        {/* <meta
          name="description"
          content="TBD"
         /> */}
      </Head>
      <Game />
    </>
  );
};

export default GamePage;
