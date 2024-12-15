import PropTypes from 'prop-types'
import "./card.css"

const Card = ({ country }) => {
  return (
    <a href={`/details/${country.numericCode}`}>
      <div className="card">
        <div className="card-image">
          <img src={country.flags.svg || country.flags.png} alt={country.name} />
        </div>
        <div className="card-details">
          <h2>{country.name}</h2>
          <ul>
            <li>Population: <span>{country.population}</span></li>
            <li>Region: <span>{country.region}</span></li>
            <li>Sub Region: <span>{country.subregion}</span></li>
            <li>Capital: <span>{country.capital || "N/A"}</span></li>
          </ul>
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numericCode: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string,
      png: PropTypes.string
    }).isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string
  }).isRequired
}

export default Card