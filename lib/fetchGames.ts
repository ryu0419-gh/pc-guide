import games from "../public/data/games.json";
import { GameProps } from "../type/type";

export async function fetchGames(): Promise<GameProps[]> {
  return games as GameProps[];
}
