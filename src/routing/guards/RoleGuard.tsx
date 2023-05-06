import { DEFAULT_ROUTES, ROLES } from '@/constants';
import { UserModel } from '@/models';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  roles: ROLES[];
};

/* If the user role matches the role that the route is requiring the user can access the page, 
  otherwise he will be redirected to unauthorized page  */
const RoleGuard: React.FC<Props> = ({ roles = [] }) => {
  const currentUser: UserModel = {
    firstName: 'Rachael',
    lastName: 'Marthoz',
    roles: [ROLES.ADMIN]
  };

  if (roles.length === 0) {
    return <Outlet />;
  }

  const hasRole = roles.some((role) => currentUser.roles.includes(role));

  return hasRole ? <Outlet /> : <Navigate replace to={DEFAULT_ROUTES.unauthorized} />;
};

export default RoleGuard;
