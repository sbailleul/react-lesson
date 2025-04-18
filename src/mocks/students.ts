import { delay, http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import type { Student } from "@/features/students-managment/shared/types";

export function mockStudents() {
	return http.get("*/api/v1/students", async (ctx) => {
		await delay(5000)
		// return HttpResponse.error();
		return HttpResponse.json([
			{
				id: faker.string.uuid(),
				firstname: faker.person.firstName(),
				lastname: faker.person.lastName(),
			},
		] satisfies Student[]);
	});
}
