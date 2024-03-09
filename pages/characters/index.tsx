import { useCharacters } from "@/assets/hooks/useCharacters";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { getLayout } from "@/components/Layout/Layout";
import { Navbar } from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

function Characters() {
  const characters = useCharacters();

  return (
    <>
      <HeadMeta title={"Characters"} />
      {characters &&
        characters.map((character) => (
          <Link href={`characters/${character.id}`} key={character.id}>
            <CharacterCard
              id={character.id}
              image={character.image}
              name={character.name}
            />
          </Link>
        ))}
    </>
  );
}
Characters.getLayout = getLayout;
export default Characters;
//types
