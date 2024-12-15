import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import DetailsPage from '../../pages/detail-page/details-page';
import HomePage from '../../pages/home-page/home-page';

const Layout = () => {
  console.log("Rendering Layout");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default Layout;