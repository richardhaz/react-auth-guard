import { Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../routes-with-not-found';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';

const AppRoutes = () => {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Rest of app routes goes here ... */}
        {/* You can also map the app routes */}
      </RoutesWithNotFound>
    </>
  );
};

export default AppRoutes;
