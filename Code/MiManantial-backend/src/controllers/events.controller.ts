import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Events} from '../models';
import {EventsRepository} from '../repositories';

export class EventsController {
  constructor(
    @repository(EventsRepository)
    public eventsRepository: EventsRepository,
  ) { }

  @post('/events')
  @response(200, {
    description: 'Events model instance',
    content: {'application/json': {schema: getModelSchemaRef(Events)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Events, {
            title: 'NewEvents',

          }),
        },
      },
    })
    events: Events,
  ): Promise<any> {
    this.eventsRepository.create(events);
    return {
      message: 'Event created',
      created: 1
    };
  }

  @get('/events/count')
  @response(200, {
    description: 'Events model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Events) where?: Where<Events>,
  ): Promise<Count> {
    return this.eventsRepository.count(where);
  }

  @get('/events')
  @response(200, {
    description: 'Array of Events model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Events, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Events) filter?: Filter<Events>,
  ): Promise<Events[]> {
    return this.eventsRepository.find(filter);
  }

  @patch('/events')
  @response(200, {
    description: 'Events PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Events, {partial: true}),
        },
      },
    })
    events: Events,
    @param.where(Events) where?: Where<Events>,
  ): Promise<Count> {
    return this.eventsRepository.updateAll(events, where);
  }

  @get('/events/{id}')
  @response(200, {
    description: 'Events model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Events, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Events, {exclude: 'where'}) filter?: FilterExcludingWhere<Events>
  ): Promise<Events> {
    return this.eventsRepository.findById(id, filter);
  }

  @patch('/events/{id}')
  @response(204, {
    description: 'Events PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Events, {partial: true}),
        },
      },
    })
    events: Events,
  ): Promise<void> {
    await this.eventsRepository.updateById(id, events);
  }

  @put('/events/{id}')
  @response(204, {
    description: 'Events PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() events: Events,
  ): Promise<void> {
    await this.eventsRepository.replaceById(id, events);
  }

  @del('/events/{id}')
  @response(204, {
    description: 'Events DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.eventsRepository.deleteById(id);
  }

  //Calculate day of event
  @get('/events/eventDay/{dateEvent}')
  @response(200, {
    description: 'Calculate day of event',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Events, {includeRelations: true}),
      },
    },
  })
  async calculateDays(
    @param.path.string('dateEvent') dateEvent: string

  ): Promise<any> {
    var date = new Date();
    var dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    var dateEventaux = new Date(dateEvent);
    var dateEventUtc = Date.UTC(dateEventaux.getFullYear(), dateEventaux.getMonth(), dateEventaux.getDate())
    var differnce = Math.abs(dateUtc - dateEventUtc);
    var dayEvent = differnce / (1000 * 3600 * 24);

    return {
      daysEvent: dayEvent
    };
  }



}
