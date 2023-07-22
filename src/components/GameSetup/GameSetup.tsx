import { type Dispatch, type SetStateAction, type FormEvent } from "react";

const GameSetup = ({
  gameUrl,
  theme,
  setTheme,
  medium,
  setMedium,
  setSubmitted,
}: {
  gameUrl: string;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  medium: string;
  setMedium: Dispatch<SetStateAction<string>>;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(gameUrl)
      .then(() => {
        // TODO: ephemeral success popup
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="font-bold">Share your game link!</p>
        <div className="flex gap-2">
          <p>{gameUrl}</p>
          <button className="text-purple-700" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* TODO: here's where I probably want an (i) info icon with a dialog explaining theme
              or a "(what's this?) below/next to the label" */}
        <label htmlFor="theme" className="font-bold">
          Enter a theme:
        </label>
        <input
          className="border-2 border-solid border-black"
          id="theme"
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
          maxLength={50} // TBD
          autoFocus
        />
        {/* TODO: I might want an explainer here too */}
        <p className="font-bold">Do you want AI-generated text or images?</p>
        <label htmlFor="text" className="flex gap-2">
          <input
            name="medium"
            id="text"
            type="radio"
            value="text"
            checked={medium === "text"}
            onChange={() => setMedium("text")}
          />
          Text
        </label>
        <label htmlFor="images" className="flex gap-2">
          <input
            name="medium"
            id="images"
            type="radio"
            value="images"
            checked={medium === "images"}
            onChange={() => setMedium("images")}
          />
          Images
        </label>
        <button
          className="border-2 border-solid border-black bg-black text-white"
          type="submit"
        >
          Generate board
        </button>
      </form>
    </section>
  );
};

export default GameSetup;
