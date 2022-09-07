"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBaseEntity = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
class MyBaseEntity extends typeorm_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, class_transformer_1.Transform)((row) => +new Date(row.value)),
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: 'Fecha de creación',
    }),
    __metadata("design:type", Date)
], MyBaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Transform)((row) => +new Date(row.value)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        nullable: false,
        name: 'updated_at',
        comment: 'Fecha de Actualización',
    }),
    __metadata("design:type", Date)
], MyBaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        nullable: false,
        name: 'deleted_at',
        select: false,
        comment: 'Fecha de Borrado',
    }),
    __metadata("design:type", Date)
], MyBaseEntity.prototype, "deletedAt", void 0);
exports.MyBaseEntity = MyBaseEntity;
//# sourceMappingURL=base.entity.js.map