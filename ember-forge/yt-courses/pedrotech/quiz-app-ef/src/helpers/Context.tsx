import { createContext } from "react";

interface QuizContextType {
  gameState: string;
  setGameState: (state: string) => void;
}

export const QuizContext = createContext<QuizContextType>({
  gameState: "menu",
  setGameState: () => {},
});
