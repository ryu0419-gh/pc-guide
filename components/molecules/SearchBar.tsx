// components/molecules/SearchBar.tsx
import React from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

type Props = {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export const SearchBar = ({ query, onQueryChange, onSearch }: Props) => (
  <div className="flex gap-2">
    <Input
      type="text"
      value={query}
      onChange={onQueryChange}
      placeholder="プレイしたいゲームを検索..."
    />
    <Button onClick={onSearch}>検索</Button>
  </div>
);