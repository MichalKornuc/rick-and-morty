import React, { useEffect, useState } from "react";

export type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation | undefined;
  location: CharacterLocation | undefined;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

const CharacterInfo: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="justify-center content-center">
      <h1 className="text-xl">{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
};

export default CharacterInfo;
