import { useParams } from 'react-router-dom';
import useStore from '../../store/useStore';
import "./detail-page.css"
import DetailsCard from '../../components/ui/details-card';

const DetailsPage = () => {
  console.log("Rendering DetailsPage");
  const { id } = useParams();
  const getCountryByCode = useStore(state => state.getCountryByCode);
  const country = getCountryByCode(id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <section className='country-page'>
      <div className='btn'>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
      <DetailsCard country={country} />
    </section>
  );
};

export default DetailsPage;