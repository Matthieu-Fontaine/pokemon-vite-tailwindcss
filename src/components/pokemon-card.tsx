import { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';

type Props = {
  pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {

  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  return (
    <div key={pokemon.id} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mb-6">
      <img src={pokemon.picture} alt={pokemon.name} className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">{pokemon.name}</h2>
          <p className="dark:text-gray-100">hp: {pokemon.hp} cp: {pokemon.cp}</p>
          <p className="dark:text-gray-100">Types: {pokemon.types.join(' ')}</p>
          <p className="dark:text-gray-100 text-xs">Created: {formatDate(pokemon.created)}</p>
        </div>
      </div>
    </div>);

};

export default PokemonCard;