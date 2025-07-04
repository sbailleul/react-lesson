import { mockStudents, mockDeleteStudent, mockCreateStudent, mockGetStudent } from "@/mocks/students";

export const handlers = [
	mockStudents(),
	mockDeleteStudent(),
	mockCreateStudent(),
	mockGetStudent(),
];