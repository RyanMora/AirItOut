import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({minRating, updateFilter}) => (
  <div>
    <span>Filter results:</span>
    <br/>
    <label>Minimum Rating</label>
    <input
      type="number"
      value={minRating}
      onChange={handleChange('minRating', updateFilter)}
      />
  </div>
);

export default FilterForm;
