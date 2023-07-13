"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PaymentController = class PaymentController {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async create(payment) {
        return this.paymentRepository.create(payment);
    }
    async count(where) {
        return this.paymentRepository.count(where);
    }
    async find(filter) {
        return this.paymentRepository.find(filter);
    }
    async updateAll(payment, where) {
        return this.paymentRepository.updateAll(payment, where);
    }
    async findById(id, filter) {
        return this.paymentRepository.findById(id, filter);
    }
    async updateById(id, payment) {
        await this.paymentRepository.updateById(id, payment);
    }
    async replaceById(id, payment) {
        await this.paymentRepository.replaceById(id, payment);
    }
    async deleteById(id) {
        await this.paymentRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/payments'),
    (0, rest_1.response)(200, {
        description: 'Payment model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Payment) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Payment, {
                    title: 'NewPayment',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/payments/count'),
    (0, rest_1.response)(200, {
        description: 'Payment model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Payment)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/payments'),
    (0, rest_1.response)(200, {
        description: 'Array of Payment model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Payment, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Payment)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/payments'),
    (0, rest_1.response)(200, {
        description: 'Payment PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Payment, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Payment)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Payment, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/payments/{id}'),
    (0, rest_1.response)(200, {
        description: 'Payment model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Payment, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Payment, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/payments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Payment PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Payment, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Payment]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/payments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Payment PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Payment]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/payments/{id}'),
    (0, rest_1.response)(204, {
        description: 'Payment DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PaymentController.prototype, "deleteById", null);
PaymentController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PaymentRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PaymentRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map