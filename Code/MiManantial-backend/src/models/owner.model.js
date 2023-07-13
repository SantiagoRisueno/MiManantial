"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Owner = class Owner extends repository_1.Entity {
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
], Owner.prototype, "id", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerCard", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerName", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerLastName", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerTelephone", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerEmail", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerUsername", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerPassword", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerNumberHouse", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], Owner.prototype, "ownerType", void 0);
Owner = (0, tslib_1.__decorate)([
  (0, repository_1.model)(),
  (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=owner.model.js.map
