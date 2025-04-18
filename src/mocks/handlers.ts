import type { StudentProps } from "@/features/students-managment/components/Student";
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
type Student = {
	id: string;
	firstname: string;
	lastname: string;
	studentClass: string;
};
export const handlers = [
	http.get("*/api/v1/students", ({ params }) => {
		return HttpResponse.json([
			{
				firstname: faker.person.firstName(),
				lastname: faker.person.lastName(),
				id: faker.string.uuid(),
				studentClass: "AL-1",
			},
		] satisfies Student[]);
	}),
];
