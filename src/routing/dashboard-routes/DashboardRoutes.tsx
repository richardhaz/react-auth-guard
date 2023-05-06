import { Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../routes-with-not-found';
import { RoleGuard } from '../guards';
import { ROLES, ROUTES } from '@/constants';
import { DashboardHomePage } from '@/pages/dashboard/home';
import { DashboardProfilePage } from '@/pages/dashboard/profile';

const DashboardRoutes = () => {
  return (
    <>
      {/* Add any layout on top if desired */}
      <RoutesWithNotFound>
        <Route element={<RoleGuard roles={[ROLES.ADMIN]} />}>
          <Route path="/" element={<Navigate to={`${ROUTES.dashboard}/default`} />} />
          <Route path="/default" element={<DashboardHomePage />} />
          <Route path="/profile" element={<DashboardProfilePage />} />
          {/* Rest of dashboard routes goes here ... */}
          {/* You can also map the dashboard routes */}
        </Route>
      </RoutesWithNotFound>
    </>
  );
};

export default DashboardRoutes;
