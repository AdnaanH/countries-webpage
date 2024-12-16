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
            {/* <button className="popup-button">Show more details</button>
            <div className="popup">
              <div className="popup-content">
                <div className="popup-header">
                  <h2>{country.name}</h2>
                  <button className="popup-close">&times;</button>
                </div>
                <div className="popup-body">
                  <h3>Region: {country.region}</h3>
                  <h3>Sub Region: {country.subregion}</h3>
                  <h3>Capital: {country.capital || "N/A"}</h3>
                  <h3>Population: {country.population}</h3>
                  <h3>Native Name: {country.nativeName}</h3>
                  <h3>Top Level Domain: {country.topLevelDomain.join(", ")}</h3>
                  <h3>Currencies: {country.currencies.map(currency => currency.name).join(", ")}</h3>
                  <h3>Languages: {country.languages.map((language) => language.name).join(", ")}</h3>
                </div>
                <div className="popup-footer">
                  <button className="popup-close">Close</button>
                </div>
              </div>
            </div> */}
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