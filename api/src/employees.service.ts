import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 } from 'uuid';
export class Employee {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  img: string;
  @ApiProperty()
  position: string;
}
export class IdentifiedEmployee {
  @ApiProperty()
  id: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  img: string;
  @ApiProperty()
  position: string;
}
export class IdentifiedEmployees {
  @ApiProperty()
  employees: IdentifiedEmployee[];
}
type Employees = Record<string, Employee>;
const EMPLOYEES_FILE_NAME = join(__dirname, './assets/employees.json');
@Injectable()
export class EmployeesService {
  async registerEmployee(employee: Employee) {
    const employees = await this.readEmployees();
    const id = v4();

    this.writeEmployees({ ...employees, [id]: employee });
  }
  async listEmployees(): Promise<IdentifiedEmployees> {
    const txt = await readFile(EMPLOYEES_FILE_NAME, 'utf-8');
    const employees: Employees = JSON.parse(txt);
    return {
      employees: Object.entries(employees).map(([id, employee]) => ({
        ...employee,
        id,
      })),
    };
  }

  async deleteEmployee(id: string) {
    const employees = await this.readEmployees();
    const employeesWithoutId = Object.fromEntries(
      Object.entries(employees).filter(([k]) => k !== id),
    );
    this.writeEmployees(employeesWithoutId);
  }
  async updateEmployee(employee: IdentifiedEmployee) {
    const employees = await this.readEmployees();
    this.writeEmployees({
      ...employees,
      [employee.id]: {
        firstName: employee.firstName,
        img: employee.img,
        lastName: employee.lastName,
        position: employee.position,
      },
    });
  }

  private writeEmployees(employees: Employees) {
    writeFile(EMPLOYEES_FILE_NAME, JSON.stringify(employees));
  }

  private async readEmployees(): Promise<Employees> {
    const txt = await readFile(EMPLOYEES_FILE_NAME, 'utf-8');
    return JSON.parse(txt);
  }
}
