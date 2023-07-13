import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Owner } from '../models';
import { OwnerRepository } from '../repositories';
export declare class OwnerController {
    ownerRepository: OwnerRepository;
    constructor(ownerRepository: OwnerRepository);
    create(owner: Omit<Owner, 'id'>): Promise<Owner>;
    count(where?: Where<Owner>): Promise<Count>;
    find(filter?: Filter<Owner>): Promise<Owner[]>;
    updateAll(owner: Owner, where?: Where<Owner>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Owner>): Promise<Owner>;
    updateById(id: string, owner: Owner): Promise<void>;
    replaceById(id: string, owner: Owner): Promise<void>;
    deleteById(id: string): Promise<void>;
}
