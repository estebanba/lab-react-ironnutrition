import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ searchFood, setSearchFood }) {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    setSearchFood(currentValue);
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFood} type="text" onChange={handleChange} />
    </div>
  );
}

export default Search;
