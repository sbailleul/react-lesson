import {
	mockCreateStudent,
	mockDeleteStudent,
	mockGetStudent,
	mockStudents,
} from "@/mocks/students";
import { setupWorker } from "msw/browser";
const handlers = [
	mockStudents(),
	mockDeleteStudent(),
	mockCreateStudent(),
	mockGetStudent(),
];
export const worker = setupWorker(...handlers);
