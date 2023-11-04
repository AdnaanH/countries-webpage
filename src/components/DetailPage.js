import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryCode } = useParams();

  useEffect(() => {
    const jsonURL =
      'https://raw.githubusercontent.com/AdnaanH/country-data/7ee064093bbd1acb8db54bb8b6e2023c00390630/formattedData.json';

    axios
      .get(jsonURL)
      .then((response) => {
        const country = response.data.countries.find(
          (country) => country.alpha3Code === countryCode
        );
        setCountryDetails(country);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [countryCode]);

  if (!countryDetails) {
    return <div>...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column detailsPage justify-content-center">
        <div className="d-flex justify-content-start">
          <Link to="/">
            <button type="button" className="btn btn-light">
              <i className="bi bi-arrow-left"></i>
              Back
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-between">
          <div className="row w-50 detailImage">
            <img
              src={countryDetails.flags.svg}
              className="img-fluid w-75"
              alt="..."
            />
          </div>
          <div className="row w-50">
            <div className="d-flex flex-column justify-content-center">
              <h4 className="fw-bolder fs-4">{countryDetails.name}</h4>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex flex-column w-50">
                  <p className="card-text fw-bold">
                    Native Name: <span className="fw-normal">{countryDetails.nativeName}</span>
                  </p>
                  <p className="card-text fw-bold">
                    Population: <span className="fw-normal">{countryDetails.population}</span>
                  </p>
                  <p className="card-text fw-bold">
                    Region: <span className="fw-normal">{countryDetails.region}</span>
                  </p>
                  <p className="card-text fw-bold">
                    Sub Region: <span className="fw-normal">{countryDetails.subregion}</span>
                  </p>
                  <p className="card-text fw-bold">
                    Capital: <span className="fw-normal">{countryDetails.capital}</span>
                  </p>
                </div>
                <div className="d-flex flex-column w-50">
                  <p className="card-text fw-bold">
                    Top Level Domain: <span className="fw-normal">{countryDetails.topLevelDomain}</span>
                  </p>
                  <p className="card-text fw-bold">
                    Currencies:
                    {countryDetails.currencies.map((currency) => (
                      <span className="fw-normal" key={currency.code}>
                        {currency.name}
                      </span>
                    ))}
                  </p>
                  <p className="card-text fw-bold">
                    Languages:
                    {countryDetails.languages.map((language) => (
                      <span className="fw-normal d-flex justify-content-start" key={language.iso639_1}>
                        {language.name} 
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-4 borderCountry">
                <p className="card-text fw-bold">Border Countries:</p>
                <div className="d-flex justify-content-between">
                  {countryDetails.borders && countryDetails.borders.length > 0 ? (
                    countryDetails.borders.map((border) => (
                      <p className="fs-6" key={border}>
                        {border}
                      </p>
                    ))
                  ) : (
                    <p className="fs-6">No border countries</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
