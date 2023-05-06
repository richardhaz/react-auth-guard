import { ROLES } from '@/constants';

export interface UserModel {
  firstName: string;
  lastName: string;
  roles: ROLES[];
}
