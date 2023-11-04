import React, { useState } from 'react';
import TopBar from './TopBar';
import CountryList from './CountryList';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilter = (filterValue) => {
    console.log('Filter', filterValue);
  };

  return (
    <div className="Home">
      <TopBar onSearch={handleSearch} onFilter={handleFilter} />
      <CountryList searchValue={searchValue} />
    </div>
  );
}

export default Home;
