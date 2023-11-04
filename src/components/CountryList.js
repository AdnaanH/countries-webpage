import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function CountryList({ searchValue, filterValue }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const jsonURL =
      'https://raw.githubusercontent.com/AdnaanH/country-data/7ee064093bbd1acb8db54bb8b6e2023c00390630/formattedData.json';

    axios
      .get(jsonURL)
      .then((response) => {
        setCountries(response.data.countries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter by region when a region is selected
  const filteredCountries = countries.filter((country) => {
    if (filterValue) {
      return country.region.toLowerCase() === filterValue.toLowerCase();
    } else {
      return true; // Show all countries if no region is selected
    }
  });

  // Further filter by search value
  const filteredCountriesByName = filteredCountries.filter((country) =>
    country.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row flex-wrap countryList">
        {filteredCountriesByName.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryList;
