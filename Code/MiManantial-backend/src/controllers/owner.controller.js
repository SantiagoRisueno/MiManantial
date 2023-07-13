"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OwnerController = class OwnerController {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async create(owner) {
        return this.ownerRepository.create(owner);
    }
    async count(where) {
        return this.ownerRepository.count(where);
    }
    async find(filter) {
        return this.ownerRepository.find(filter);
    }
    async updateAll(owner, where) {
        return this.ownerRepository.updateAll(owner, where);
    }
    async findById(id, filter) {
        return this.ownerRepository.findById(id, filter);
    }
    async updateById(id, owner) {
        await this.ownerRepository.updateById(id, owner);
    }
    async replaceById(id, owner) {
        await this.ownerRepository.replaceById(id, owner);
    }
    async deleteById(id) {
        await this.ownerRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/owners'),
    (0, rest_1.response)(200, {
        description: 'Owner model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Owner) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, {
                    title: 'NewOwner',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/owners/count'),
    (0, rest_1.response)(200, {
        description: 'Owner model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Owner)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/owners'),
    (0, rest_1.response)(200, {
        description: 'Array of Owner model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Owner, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Owner)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/owners'),
    (0, rest_1.response)(200, {
        description: 'Owner PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Owner)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Owner, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/owners/{id}'),
    (0, rest_1.response)(200, {
        description: 'Owner model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Owner, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/owners/{id}'),
    (0, rest_1.response)(204, {
        description: 'Owner PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Owner]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/owners/{id}'),
    (0, rest_1.response)(204, {
        description: 'Owner PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Owner]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/owners/{id}'),
    (0, rest_1.response)(204, {
        description: 'Owner DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OwnerController.prototype, "deleteById", null);
OwnerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OwnerRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OwnerRepository])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map
