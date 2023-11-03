import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  if (!country) {
    return null; // Do not render anything if the country is not available yet.
  }

  return (
    <div className="col-md-3">
      <Link to={`/detail/${country.alpha3Code}`}>
        <div className="card">
          <img src={country.flag} className="card-img-top" alt={country.name} />
          <div className="card-body">
            <h5 className="card-title fw-bolder">{country.name}</h5>
            <p className="card-text fw-bold">Population: <span className='fw-normal'>{country.population}</span></p>
            <p className="card-text fw-bold">Region: <span className='fw-normal'>{country.region}</span></p>
            <p className="card-text fw-bold">Capital: <span className='fw-normal'>{country.capital}</span></p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
