import React from 'react';
import TopBar from './TopBar';
import CountryList from './CountryList';

function Home({ countries, searchText, setSearchText, selectedRegion, setSelectedRegion }) {
  return (
    <div className="Home">
      <TopBar searchText={searchText} setSearchText={setSearchText} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <CountryList countries={countries} />
    </div>
  );
}

export default Home;
