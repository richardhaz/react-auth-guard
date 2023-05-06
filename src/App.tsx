import { BrowserRouter, Route } from 'react-router-dom';
import { RoutesWithNotFound } from '@/routing/routes-with-not-found';
import { AuthGuard } from '@/routing/guards';
import { AppRoutes } from '@/routing/app-routes';
import { LoginPage } from '@/pages/login';
import { UnauthorizedPage } from '@/pages/unauthorized';
import { ROUTES, DEFAULT_ROUTES } from '@/constants';
import { DashboardRoutes } from '@/routing/dashboard-routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesWithNotFound>
          {/* Default Routes */}
          <Route path={DEFAULT_ROUTES.login} element={<LoginPage />} />
          <Route path={DEFAULT_ROUTES.unauthorized} element={<UnauthorizedPage />} />
          {/* App Routes */}
          <Route element={<AuthGuard />}>
            <Route path="/*" element={<AppRoutes />} />
          </Route>
          {/* Dashboard Routes */}
          <Route element={<AuthGuard />}>
            <Route path={`${ROUTES.dashboard}/*`} element={<DashboardRoutes />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;
