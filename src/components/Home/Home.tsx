import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleStartGame = () => {
    void router.push("/game");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-center text-xl font-bold">
        Welcome to Code<em>frames</em>
      </h1>
      <p>
        A remix of the awesome original,{" "}
        <a className="text-blue-700 underline" href="https://codenames.game">
          Codenames
        </a>
        .
      </p>
      <p>{/* TODO: rules explanation */}</p>
      <button
        className="border-2 border-solid border-black px-4 py-2"
        onClick={handleStartGame}
      >
        Start game
      </button>
      {/* TODO: onClick -> open rules Dialog */}
      <button className="text-sm underline">Rules</button>
    </main>
  );
};

export default Home;
