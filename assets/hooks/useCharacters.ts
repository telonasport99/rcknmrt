import { useEffect, useState } from "react";

import { Nullable } from "@/assets/types";
import axios from "axios";

export const useCharacters = (): Nullable<CharacterType[]> => {
  const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => setCharacters(res.data.results));
  }, []);

  return characters;
};
export type CharacterType = {
  id: number;
  image: string;
  name: string;
};
