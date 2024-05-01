import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  Employee,
  EmployeesService,
  IdentifiedEmployee,
} from './employees.service';

@Controller('employees')
@ApiTags('employees')
export class EmployeesController {
  constructor(private readonly appService: EmployeesService) {}

  @Post()
  @ApiCreatedResponse()
  registerEmployees(@Body() employee: Employee) {
    this.appService.registerEmployee(employee);
  }

  @Get()
  @ApiOkResponse()
  @ApiNoContentResponse()
  listEmployees() {
    return this.appService.listEmployees();
  }

  @Put()
  @ApiOkResponse()
  @ApiNoContentResponse()
  updateEmployee(@Body() employee: IdentifiedEmployee) {
    return this.appService.updateEmployee(employee);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse()
  @ApiNoContentResponse()
  deleteEmployee(@Param('id') id: string) {
    return this.appService.deleteEmployee(id);
  }
}
