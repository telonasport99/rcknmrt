import { useEffect, useState } from "react";

import { CharacterType } from "@/assets/hooks/useCharacters";
import { Nullable } from "@/assets/types";
import axios from "axios";
import { useRouter } from "next/router";

export const useCharacter = (): Nullable<CharacterType> => {
  const [character, setCharacter] = useState<Nullable<CharacterType>>(null);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
      .then((res) => setCharacter(res.data));
  }, []);

  return character;
};
