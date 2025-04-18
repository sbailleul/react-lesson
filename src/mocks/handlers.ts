import type { StudentProps } from "@/features/students-managment/components/Student";
import { delay, http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
type Student = {
	id: string;
	firstname: string;
	lastname: string;
	studentClass: string;
};

const students = [
	{
		firstname: faker.person.firstName(),
		lastname: faker.person.lastName(),
		id: faker.string.uuid(),
		studentClass: "AL-1",
	},
];
export const handlers = [
	http.get("*/api/v1/students", async ({ params }) => {
		// await delay(5000);
		// return HttpResponse.error();
		return HttpResponse.json(students);
	}),
];
