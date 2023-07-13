import {Entity} from '@loopback/repository';
export declare class Owner extends Entity {
  id?: string;
  ownerCard: string;
  ownerName: string;
  ownerLastName: string;
  ownerTelephone: string;
  ownerEmail: string;
  ownerUsername: string;
  ownerPassword: string;
  ownerNumberHouse: string;
  ownerType: string;
  constructor(data?: Partial<Owner>);
}
export interface OwnerRelations {
}
export declare type OwnerWithRelations = Owner & OwnerRelations;
