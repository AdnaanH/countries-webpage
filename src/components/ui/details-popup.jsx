import PropTypes from 'prop-types';
import './details-popup.css'; // Add your CSS file for styling
import { generateRandomCountryDescription } from '../../utils/infogenerator'; // Import the function

const DetailsPopup = ({ country, onClose }) => {
  const description = generateRandomCountryDescription(country); // Generate description

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>{country.name}</h2>
        </div>
        <div className="popup-body">
          <p>{description.split('\n\n')[0]}</p> 
          <p>{description.split('\n\n')[1]}</p> 
          <p>{description.split('\n\n')[2]}</p> 
        </div>
        <div className="popup-footer">
          <button className="popup-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

DetailsPopup.propTypes = {
  country: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailsPopup; 