import PropTypes from 'prop-types'
import "./card.css"

function formatName(name, maxLength) {
  const words = name.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (result.length + words[i].length > maxLength) {
      result += '...';
      break;
    }
    result += (i > 0 ? ' ' : '') + words[i];
  }
  return result;
}

const Card = ({ country, maxLength = 15 }) => {
  return (
    <a href={`/details/${country.numericCode}`}>
      <div className="card">
        <div className="card-image">
          <img src={country.flags.svg || country.flags.png} alt={country.name} />
        </div>
        <div className="card-details">
          <h2 className="single-line">{formatName(country.name, maxLength)}</h2>
          <ul>
            <li>Population: <span>{country.population}</span></li>
            <li>Region: <span>{country.region}</span></li>
            <li>Sub Region: <span>{formatName(country.subregion, maxLength)}</span></li>
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
  }).isRequired,
  maxLength: PropTypes.number
}

export default Card