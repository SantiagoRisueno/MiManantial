import {Entity, model, property} from '@loopback/repository';

@model()
export class Owner extends Entity {
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
  ownerCard: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerName: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerLastName: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerTelephone: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerEmail: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerUsername: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerPassword: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerNumberHouse: string;

  @property({
    type: 'string',
    required: true,
  })
  ownerType: string;

  constructor(data?: Partial<Owner>) {
    super(data);
  }
}

export interface OwnerRelations {
  
}

export type OwnerWithRelations = Owner & OwnerRelations;
