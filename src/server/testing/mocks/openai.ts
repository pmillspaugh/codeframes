const MOCK_WORD_LIST = [
  "Friends",
  "The Office",
  "Breaking Bad",
  "Game of Thrones",
  "The Simpsons",
  "Stranger Things",
  "The Crown",
  "Grey's Anatomy",
  "The Big Bang Theory",
  "House of Cards",
  "Black Mirror",
  "The Mandalorian",
  "The Walking Dead",
  "The Handmaid's Tale",
  "Fargo",
  "Homeland.",
];

export function mockTextGen(submitted: boolean) {
  if (!submitted) {
    return {};
  }

  return {
    data: {
      wordList: MOCK_WORD_LIST,
    },
  };
}
