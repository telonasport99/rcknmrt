import Image from "next/image";
import {CharacterType} from "@/assets/hooks/useCharacters";
import styles from  './CharacterCard.module.scss'

export const CharacterCard = (character:CharacterType) => {
    return (
        <div className={styles.card} key={character.id}>
            <div>{character.name}</div>
            <Image
                width={300}
                height={300}
                src={character.image}
                alt={`Picture of ${character}`
                }
            />
        </div>
    );
};