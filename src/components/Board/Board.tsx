import Card, { type CardProps, CARD_COLORS } from "../Card";

function generateBoard(wordList: string[]): CardProps[] {
  if (wordList.length !== 16) {
    throw new Error("Expected word list to contain 16 words");
  }

  const blues = wordList
    .slice(0, 6)
    .map((word) => ({ word, color: CARD_COLORS.BLUE }));
  const reds = wordList
    .slice(6, 12)
    .map((word) => ({ word, color: CARD_COLORS.RED }));
  const grays = wordList
    .slice(12, 15)
    .map((word) => ({ word, color: CARD_COLORS.GRAY }));
  const black = wordList
    .slice(15, 16)
    .map((word) => ({ word, color: CARD_COLORS.BLACK }));

  const board = [...blues, ...reds, ...grays, ...black].map((card) => ({
    ...card,
  }));

  board.sort(() => Math.random() - 0.5);

  return board;
}

const Board = ({ wordList }: { wordList: string[] }) => {
  // TODO: This sizing/spacing will have to be dynamic so the full grid is visible nicely on any viewport
  // Start with a 4x4 grid: 6 red, 5 blue, 1 bomb, 4 neutral
  return (
    <section className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {generateBoard(wordList).map(({ word, color }) => (
          <Card key={word} word={word} color={color} />
        ))}
      </div>
    </section>
  );
};

export default Board;
