import React, { useRef, useState } from "react";
import {
  Pokeball,
  Cloud1,
  Cloud2,
  Container,
  Dino,
  Game,
  GameArea,
  InfoPerson,
} from "./style";
const Sound = require("../../assets/gamer-over.mp3");

function DashBoard() {
  const [jump, setJump] = useState(false);
  const [lastPosition, setLastPosition] = useState(0);

  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const dinoRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const pokeballRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  document.onkeydown = (e: any) => {
    if (e instanceof KeyboardEvent && e.code === "Space") {
      let dinoPosition = dinoRef.current.getBoundingClientRect().top;
      setLastPosition(dinoPosition);
      setJump(true);
      setTimeout(() => {
        setJump(false);
      }, 500);
    }
  };

  setInterval(function () {
    if (dinoRef.current && pokeballRef.current) {
      let dinoPositionJump = dinoRef.current.getBoundingClientRect().top;
      let dinoPosition = dinoRef.current.getBoundingClientRect().left;
      let pokeballPosition = pokeballRef.current.getBoundingClientRect().left;

      if (
        pokeballPosition < dinoPosition + 40 &&
        pokeballPosition > dinoPosition &&
        dinoPositionJump >= lastPosition
      ) {
        if (audioRef.current) {
          audioRef.current.play();
        }
        alert("game over");
        window.location.reload();
      }
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
          <Dino
            ref={dinoRef}
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
}

export default DashBoard;
