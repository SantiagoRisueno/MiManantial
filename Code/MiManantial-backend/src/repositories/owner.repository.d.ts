import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Owner, OwnerRelations } from '../models';
export declare class OwnerRepository extends DefaultCrudRepository<Owner, typeof Owner.prototype.id, OwnerRelations> {
    constructor(dataSource: MongoDataSource);
}
