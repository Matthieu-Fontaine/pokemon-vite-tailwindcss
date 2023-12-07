import { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
const App: FunctionComponent = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-bold">Pokedex</h1>
      </header>
      <PokemonList />
    </div>
  );
}


export default App;