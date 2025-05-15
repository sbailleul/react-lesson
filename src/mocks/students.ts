import { delay, http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { Student } from "@/features/students-managment/shared/types";
const students = [
	{
		id: faker.string.uuid(),
		firstname: faker.person.firstName(),
		lastname: faker.person.lastName(),
	},
] satisfies Student[];
export function mockStudents() {
	return http.get("*/api/v1/students", async (ctx) => {
		// return HttpResponse.error();
		return HttpResponse.json(students);
	});
}

export function mockDeleteStudent() {
	return http.delete("*/api/v1/students/:id", async ({ request, params }) => {
		const studentId = params.id;
		const studentToRemoveIdx = students.findIndex((s) => s.id === studentId);
		students.splice(studentToRemoveIdx, 1);
		return HttpResponse.json(students);
	});
}

export function mockCreateStudent() {
	return http.post("*/api/v1/students", async ({ request, params }) => {
		const student = (await request.json()) as Omit<Student, 'id'>;
		console.log(student)
		students.push({...student, id: faker.string.uuid() });
		return HttpResponse.json(students);
	});
}
