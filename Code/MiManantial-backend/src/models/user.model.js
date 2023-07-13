"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
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
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "cardIdentification", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "telephone", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
  (0, repository_1.property)({
    type: 'string',
    required: true,
  }),
  (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "userType", void 0);
User = (0, tslib_1.__decorate)([
  (0, repository_1.model)(),
  (0, tslib_1.__metadata)("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map
