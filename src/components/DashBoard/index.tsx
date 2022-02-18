import React, { useRef, useState } from "react";
import {
  Pokeball,
  Cloud1,
  Cloud2,
  Container,
  Pokemon,
  Game,
  GameArea,
  InfoPerson,
} from "./style";

const Sound = require("../../assets/gamer-over.mp3");

const DashBoard: React.FC = () => {
  const [jump, setJump] = useState(false);
  const [lastPositionJumpPokemon, setLastPositionJumpPokemon] = useState(0);

  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const pokemonRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const pokeballRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  document.onkeydown = (event: any) => {
    if (event instanceof KeyboardEvent && event.code === "Space") {
      let pokemonPosition = pokemonRef.current.getBoundingClientRect().top;
      setLastPositionJumpPokemon(pokemonPosition);
      setJump(true);
      setTimeout(() => {
        setJump(false);
      }, 500);
    }
  };

  setInterval(() => {
    let pokemonPositionJump = pokemonRef.current.getBoundingClientRect().top;
    let pokemonPosition = pokemonRef.current.getBoundingClientRect().left;
    let pokeballPosition = pokeballRef.current.getBoundingClientRect().left;

    if (
      pokeballPosition < pokemonPosition + 40 &&
      pokeballPosition > pokemonPosition &&
      pokemonPositionJump === lastPositionJumpPokemon
    ) {
      audioRef.current.play();
      alert("game over");
      window.location.reload();
    }
  }, 100);

  return (
    <Container>
      <InfoPerson>
        <img src="" alt="Avatar" />
        <p>NAME POKEMON</p>
      </InfoPerson>

      <GameArea>
        <Game>
          <audio ref={audioRef}>
            <source src={Sound} type="audio/mp3" />
          </audio>
          <Pokemon
            ref={pokemonRef}
            className={jump ? "Jump" : ""}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          />
          <Pokeball ref={pokeballRef} />
          <>
            <Cloud1 />
            <Cloud2 />
          </>
        </Game>
      </GameArea>
    </Container>
  );
};

export default DashBoard;
