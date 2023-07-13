"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Payment = class Payment extends repository_1.Entity {
  constructor(data) {
    super(data);
  }
};
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    id: true,
    generated: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "id", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "payCode", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "ownerName", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "ownerCard", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'date',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "date", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "value", void 0);
Payment = (0, tslib_1.__decorate)([
  (0, repository_1.model)(),
  (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.model.js.map
