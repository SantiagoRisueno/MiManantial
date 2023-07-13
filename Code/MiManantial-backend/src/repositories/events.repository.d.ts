import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Events, EventsRelations } from '../models';
export declare class EventsRepository extends DefaultCrudRepository<Events, typeof Events.prototype.id, EventsRelations> {
    constructor(dataSource: MongoDataSource);
}
