import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsFilters() {
  const {
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    filterDataButton,
    deleteFilter,
    optionsFiltered,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const ONE = 1;

  return (
    <div className="filters-container ">
      <div className="filter-selector">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleFilterByName }
          placeholder="Filter by Name"
        />
        <select
          data-testid="column-filter"
          onChange={ handleInputColumn }
        >
          <option value="">Choose column</option>
          { optionsFiltered.map((option) => (
            <option key={ option } value={ option }>{ option }</option>)) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleInputComparison }
        >
          <option value="">Choose comparison</option>
          <option value="greater than">greater than</option>
          <option value="less than">less than</option>
          <option value="equal to">equal to</option>
        </select>
        <input
          type="number"
          placeholder="value"
          data-testid="value-filter"
          onChange={ handleInputValue }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterDataButton }
        >
          Filter
        </button>
      </div>
      { filterByNumericValues.length >= ONE
        ? filterByNumericValues.map((filter, index) => (
          <div data-testid="filter" key={ index } className="filters">
            <p>
              {`Filter ${index + 1}:
              ${filter.column} ${filter.comparison} ${filter.value}` }
            </p>
            <button
              type="button"
              value={ filter.column }
              onClick={ deleteFilter }
            >
              X
            </button>
          </div>
        )) : <div>Sem filtros</div>}
    </div>
  );
}

export default PlanetsFilters;
