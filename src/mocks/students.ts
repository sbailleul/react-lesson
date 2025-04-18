import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { Student } from "@/features/students-managment/shared/types";

export function mockStudents() {
	return http.get("*/api/v1/students", (ctx) => {
		console.log(ctx);
		return HttpResponse.json([
			{
				id: faker.string.uuid(),
				firstname: faker.person.firstName(),
				lastname: faker.person.lastName(),
			},
		] satisfies Student[]);
	});
}
