import PropTypes from "prop-types"
import "./details-card.css"

const DetailsCard = ({ country }) => {
  return (
    <section className="details-card">
        <div className="details-image">
          <img src={country.flags.svg || country.flags.png} alt={country.name} />
        </div>
        <div className="details-info">
            <h2>{country.name}</h2>
            <div className="details-section">
              <ul>
                  <li>Native Name: <span>{country.nativeName}</span></li>
                  <li>Population: <span>{country.population}</span></li>
                  <li>Region: <span>{country.region}</span></li>
                  <li>Sub Region: <span>{country.subregion}</span></li>
                  <li>Capital: <span>{country.capital || "N/A"}</span></li>
              </ul>
              <ul>
                  <li>Top Level Domain: <span>{country.topLevelDomain.join(", ")}</span></li>
                  <li>Currencies: <span>{country.currencies.map(currency => currency.name).join(", ")}</span></li>
                  <li>Languages: <span>{country.languages.map((language) => language.name).join(", ")}</span></li>
              </ul>

            </div>
            <div className="border-countries">
              <p>Border Countries:</p>
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border, index) => (
                  <span key={index}>{border}</span>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
        </div>
    </section>
  )
}

DetailsCard.propTypes = {
  country: PropTypes.shape({
    nativeName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    topLevelDomain: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.arrayOf(PropTypes.object),
    languages: PropTypes.arrayOf(PropTypes.object),
    numericCode: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string,
      png: PropTypes.string
    }).isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string,
    borders: PropTypes.array
  }).isRequired
}


export default DetailsCard