import {Entity} from '@loopback/repository';
export declare class User extends Entity {
  id?: string;
  cardIdentification: string;
  name: string;
  lastName: string;
  telephone: string;
  email: string;
  username: string;
  password: string;
  userType: string;
  constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
