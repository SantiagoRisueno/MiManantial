import {Entity, model, property} from '@loopback/repository';

@model()
export class Events extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  hour: string;


  constructor(data?: Partial<Events>) {
    super(data);
  }
}

export interface EventsRelations {

}

export type EventsWithRelations = Events & EventsRelations;
