import React from "react";
import { SearchBar } from "../molecules/SearchBar";
import { GameCard } from "../organisms/GameCard";

type Props = {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  games: any[];
  onSelectGame: (id: string) => void;
};

export const HomeTemplate = ({
  query,
  onQueryChange,
  onSearch,
  games,
  onSelectGame,
}: Props) => (
  <div className="p-4 max-w-6xl mx-auto">
    <SearchBar query={query} onQueryChange={onQueryChange} onSearch={onSearch} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onSelect={onSelectGame} />
      ))}
    </div>
  </div>
);