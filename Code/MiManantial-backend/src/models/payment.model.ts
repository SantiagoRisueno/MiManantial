import {Entity, model, property} from '@loopback/repository';

@model()
export class Payment extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  payCode: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerName: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerCard: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  value: string;

  @property({
    type: 'string',
    required: true,
  })
  payState: string;

  constructor(data?: Partial<Payment>) {
    super(data);
  }
}

export interface PaymentRelations {

}

export type PaymentsWithRelations = Payment & PaymentRelations;
