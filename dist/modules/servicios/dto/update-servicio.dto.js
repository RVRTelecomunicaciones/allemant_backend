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
exports.UpdateServicioDto = void 0;
const openapi = require("@nestjs/swagger");
const tipo_servicio_entity_1 = require("../../tipo-servicios/entities/tipo-servicio.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateServicioDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, tipoServicio: { required: true, type: () => require("../../tipo-servicios/entities/tipo-servicio.entity").TipoServicio } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Nombre de Servicio' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Servicio',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.nombre != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Seleccione Tipo de Servicio' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", tipo_servicio_entity_1.TipoServicio)
], UpdateServicioDto.prototype, "tipoServicio", void 0);
exports.UpdateServicioDto = UpdateServicioDto;
//# sourceMappingURL=update-servicio.dto.js.map