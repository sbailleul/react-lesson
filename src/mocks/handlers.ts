import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { NewStudent } from "@/features/students-managment/components/StudentField";

const students = [
	{
		firstname: 'Pikachu',
		lastname: faker.person.lastName(),
		id: faker.string.uuid(),
		studentClass: "AL-1",
	},
];
export const handlers = [
	http.get("*/api/v1/sessions/slots", async () => {
		return HttpResponse.json({slots: ["Lundi 8h30", "Lundi 10h30", "Mardi 8h30", "Mardi 10h30"]});
	}),
	http.get("*/api/v1/students", async () => {
		// await delay(5000);
		// return HttpResponse.error();
		return HttpResponse.json(students);
	}),
	http.post("*/api/v1/students", async ({ request }) => {
		const newStudent = (await request.json()) as NewStudent;
		const student = { ...newStudent, id: faker.string.uuid() };
		students.push(student);
		// await delay(5000);
		// return HttpResponse.error();
		return HttpResponse.json(student);
	}),
	http.delete("*/api/v1/students/:id", ({ params }) => {
		console.log(params);
		const idx = students.findIndex((s) => s.id === params.id);
		if (idx >= 0) {
			students.splice(idx, 1);
		}
		return HttpResponse.json({});
	}),
];
