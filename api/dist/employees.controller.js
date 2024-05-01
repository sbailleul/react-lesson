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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const employees_service_1 = require("./employees.service");
let EmployeesController = class EmployeesController {
    constructor(appService) {
        this.appService = appService;
    }
    registerEmployees(employee) {
        this.appService.registerEmployee(employee);
    }
    listEmployees() {
        return this.appService.listEmployees();
    }
    updateEmployee(employee) {
        return this.appService.updateEmployee(employee);
    }
    deleteEmployee(id) {
        return this.appService.deleteEmployee(id);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employees_service_1.Employee]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "registerEmployees", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "listEmployees", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employees_service_1.IdentifiedEmployee]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNoContentResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "deleteEmployee", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('employees'),
    (0, swagger_1.ApiTags)('employees'),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map