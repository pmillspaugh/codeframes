import { useState } from "react";
import Board from "~/components/Board";
import GameSetup from "~/components/GameSetup";
// import { api } from "~/utils/api";
import { mockTextGen } from "~/server/testing/mocks/openai";

const Game = () => {
  const [theme, setTheme] = useState("");
  const [medium, setMedium] = useState("text");
  const [submitted, setSubmitted] = useState(false);

  // TODO: enable in production
  // const response = api.openai.textGen.useQuery(
  //   { themePrompt: theme },
  //   { enabled: submitted }
  // );
  const response = mockTextGen(submitted);

  if (!response.data?.wordList) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <GameSetup
          // TODO: game id will be dynamic
          gameUrl="codeframes.app/fj4G9r"
          theme={theme}
          setTheme={setTheme}
          medium={medium}
          setMedium={setMedium}
          setSubmitted={setSubmitted}
        />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section>Menu</section>
      <Board wordList={response.data.wordList} />
      <section>Game feed, teams</section>
    </main>
  );
};

export default Game;
