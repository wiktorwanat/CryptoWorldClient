import { Cryptocurrency } from './cryptocurrency.model';

export class User{
  id!: string;
  username!: string;
  password?: string;
  email!: string;
  roles!: UserRole[];
  userCryptocurrency!: Cryptocurrency[];
}

export enum UserRole{
  ROLE_USER,
  ROLE_ADMIN
}
