import { CharacterType } from "@/assets/hooks/useCharacters";
import Image from "next/image";

import styles from "./CharacterCard.module.scss";

export const CharacterCard = (character: CharacterType) => {
  return (
    <div className={styles.card} key={character.id}>
      <div>{character.name}</div>
      <Image
        alt={`Picture of ${character}`}
        height={300}
        src={character.image}
        width={300}
      />
    </div>
  );
};
