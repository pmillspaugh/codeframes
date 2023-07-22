import { useState } from "react";

export interface CardProps {
  word: string;
  color: CARD_COLORS;
}

export enum CARD_COLORS {
  BLUE = "blue",
  RED = "red",
  GRAY = "gray",
  BLACK = "black",
}

const cardVariants = {
  blue: "bg-blue-800 text-white",
  red: "bg-red-700 text-white",
  gray: "bg-orange-200 text-black",
  black: "bg-slate-800 text-white",
};

const Card = ({ word, color }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className={`${
        flipped ? cardVariants[color] : "bg-slate-400"
      } flex h-20 w-20 items-center justify-center rounded-2xl p-4 transition-all hover:scale-110 hover:cursor-pointer md:h-32 md:w-32`}
      onClick={() => setFlipped(!flipped)}
    >
      <p className="text-center text-xs md:text-xl">{word}</p>
    </article>
  );
};

export default Card;
