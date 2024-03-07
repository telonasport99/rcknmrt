import { useCharacters } from "@/assets/hooks/useCharacters";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Characters() {
  const characters = useCharacters();

  return (
    <>
      <HeadMeta title={"Create Next App"} />
      <main className={`${styles.main} ${inter.className}`}>
        {characters &&
          characters.map((character) => (
            <CharacterCard
              id={character.id}
              image={character.image}
              key={character.id}
              name={character.name}
            />
          ))}
      </main>
    </>
  );
}
//types
