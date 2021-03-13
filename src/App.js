import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import Header from './components/Header';
import StarWarsProvider from './context/StarWarsProvider';
import PlanetsFilters from './components/PlanetsFilters';

function App() {
  return (
    <div className="starwars-page">
      <StarWarsProvider>
        <Header />
        <PlanetsFilters />
        <PlanetsTable />
      </StarWarsProvider>
    </div>
  );
}

export default App;
