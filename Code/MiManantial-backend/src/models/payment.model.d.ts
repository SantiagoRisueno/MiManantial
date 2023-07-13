import {Entity} from '@loopback/repository';
export declare class Payment extends Entity {
  id?: string;
  payCode: string;
  ownerName: string;
  ownerCard: string;
  date: string;
  value: string;
  constructor(data?: Partial<Payment>);
}
export interface PaymentRelations {
}
export declare type PaymentsWithRelations = Payment & PaymentRelations;
