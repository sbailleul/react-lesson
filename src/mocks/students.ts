import { delay, http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type {
	Student,
	StudentDetail,
} from "@/features/students-managment/shared/types";
const students = [
	{
		id: faker.string.uuid(),
		firstname: faker.person.firstName(),
		lastname: faker.person.lastName(),
	},
] satisfies Student[];
export function mockStudents() {
	return http.get("*/api/v1/students", async () => {
		// return HttpResponse.error();
		return HttpResponse.json(students);
	});
}

export function mockDeleteStudent() {
	return http.delete("*/api/v1/students/:id", async ({ params }) => {
		const studentId = params.id;
		const studentToRemoveIdx = students.findIndex((s) => s.id === studentId);
		students.splice(studentToRemoveIdx, 1);
		return HttpResponse.json(students);
	});
}

export function mockCreateStudent() {
	return http.post("*/api/v1/students", async ({ request }) => {
		const student = (await request.json()) as Omit<Student, "id">;
		console.log(student);
		students.push({ ...student, id: faker.string.uuid() });
		return HttpResponse.json(students);
	});
}

export function mockGetStudent() {
	return http.get("*/api/v1/students/:id", async ({  params }) => {
		await delay(1500);
		const studentId = params.id;
		const student = students.find((s) => s.id === studentId);
		if (!student) {
			return HttpResponse.json({ error: "Student not found" }, { status: 404 });
		}
		return HttpResponse.json({
			...student,
			email: faker.internet.email(),
			age: faker.number.int({ min: 18, max: 25 }),
			class: faker.string.alphanumeric(5),
		} satisfies StudentDetail);
	});
}
