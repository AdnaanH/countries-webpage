import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/Home';
import DetailPage from './components/DetailPage';

function App() {
  const [countryData, setCountryData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/AdnaanH/country-data/7ee064093bbd1acb8db54bb8b6e2023c00390630/formattedData.json')
      .then((response) => {
        let filteredCountries = response.data.countries;

        if (searchText) {
          filteredCountries = filteredCountries.filter((country) =>
            country.name.toLowerCase().includes(searchText.toLowerCase())
          );
        }

        if (selectedRegion) {
          filteredCountries = filteredCountries.filter(
            (country) => country.region === selectedRegion
          );
        }

        setCountryData(filteredCountries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchText, selectedRegion]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage countries={countryData} searchText={searchText} setSearchText={setSearchText} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />} />
          <Route path="/detail/:countryCode" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
