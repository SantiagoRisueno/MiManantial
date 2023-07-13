import {Entity, model, property} from '@loopback/repository';

@model()
export class Payments extends Entity {
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
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  value: string;


  constructor(data?: Partial<Payments>) {
    super(data);
  }
}

export interface PaymentsRelations {
  
}

export type PaymentsWithRelations = Payments & PaymentsRelations;
