import { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemon(POKEMONS);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 flex-grow">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;