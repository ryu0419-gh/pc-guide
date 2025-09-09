import React from "react";
import { Heading } from "../atoms/Heading";
import Image from "next/image";
import { Game } from "@/types/game";
// import { SpecsTable } from "../molecules/SpecsTable";

type Props = {
  game: Game;
  onSelect: (id: string) => void;
};

export const GameCard = ({ game, onSelect }: Props) => (
  <div
    className="border rounded-lg shadow hover:shadow-lg transition p-3 cursor-pointer"
    onClick={() => onSelect(game.id)}
  >
    <Image
      src={game.thumbnail}
      alt={game.title}
      width={400}
      height={200}
      className="rounded-md object-cover"
    />
    <h3 className="text-lg font-semibold mt-2">{game.title}</h3>
     {/* <SpecsTable specs={game.specs} /> */}
  </div>
);
