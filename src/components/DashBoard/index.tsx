import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../Api";
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

interface PokemonInterface {
  sprites: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
}

const DashBoard: React.FC = () => {
  const initialPokemonValue: PokemonInterface = {
    sprites: "",
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    types: [],
  };

  const { id } = useParams<{ id: string }>();
  const [jump, setJump] = useState(false);
  const [lastPositionJumpPokemon, setLastPositionJumpPokemon] = useState(0);
  const [pokemon, setPokemon] = useState<PokemonInterface>(initialPokemonValue);

  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const pokemonRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const pokeballRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    if (id && id.length > 0) {
      const url = "/pokemon/";
      (async () => {
        await Api.get(url + id)
          .then(({ data }) => {
            let currentPokemon: PokemonInterface = {
              sprites: data?.sprites?.front_default,
              id: data?.id,
              name: data?.name,
              height: data?.height,
              weight: data?.weight,
              types: data?.types?.map((type: any) => type.type.name),
            };
            setPokemon(currentPokemon);
          })
          .catch((err) => {
            console.error(err);
          });
      })();
    }
  }, [id]);

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
    if (pokemonRef.current && pokeballRef.current) {
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
    }
  }, 100);

  return (
    <Container>
      <InfoPerson>
        <img src={pokemon.sprites} alt="Avatar" />
        <p>{pokemon.name}</p>
      </InfoPerson>

      <GameArea>
        <Game>
          <audio ref={audioRef}>
            <source src={Sound} type="audio/mp3" />
          </audio>
          <Pokemon
            ref={pokemonRef}
            className={jump ? "Jump" : ""}
            src={pokemon.sprites}
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
