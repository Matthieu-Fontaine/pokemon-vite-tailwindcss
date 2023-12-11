import { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';

type Props = {
  pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {

  const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const formatType = (type: string): string => {
    let color = '';

    switch (type) {
      case 'Feu':
        color = 'bg-red-500';
        break;
      case 'Eau':
        color = 'bg-blue-500';
        break;
      case 'Plante':
        color = 'bg-green-500';
        break;
      case 'Insecte':
        color = 'bg-lime-500';
        break;
      case 'Normal':
        color = 'bg-gray-300';
        break;
      case 'Vol':
        color = 'bg-blue-300';
        break;
      case 'Poison':
        color = 'bg-purple-200';
        break;
      case 'Fée':
        color = 'bg-pink-100';
        break;
      case 'Psy':
        color = 'bg-purple-800';
        break;
      case 'Electrik':
        color = 'bg-lime-200';
        break;
      case 'Combat':
        color = 'bg-orange-500';
        break;
      default:
        color = 'bg-gray-400';
        break;
    }


    return `${color}`;
  }

  return (

    <div key={pokemon.id} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mb-6 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out">
      <img src={pokemon.picture} alt={pokemon.name} className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">{pokemon.name}</h2>
          <p className="dark:text-gray-100">hp: {pokemon.hp} cp: {pokemon.cp}</p>
          <p className="dark:text-gray-100 text-xs">Created: {formatDate(pokemon.created)}</p>

          <div className="space-y-2">
            {pokemon.types.map(type => (
              <div key={type} className="mb-2">
                <div className={`px-4 py-2 font-semibold rounded-full inline-block ${formatType(type)} dark:text-gray-800`}>
                  <span className="text-gray-900">{type}</span>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>
    </div>);

};

export default PokemonCard;