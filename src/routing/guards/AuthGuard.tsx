import { DEFAULT_ROUTES } from '@/constants';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard: React.FC = () => {
  const isAuthorized = true;

  return isAuthorized ? <Outlet /> : <Navigate replace to={DEFAULT_ROUTES.login} />;
};
export default AuthGuard;
