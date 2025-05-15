import { mockCreateStudent, mockDeleteStudent, mockStudents } from "@/mocks/students";
import { setupWorker } from "msw/browser";
const handlers = [mockStudents(), mockDeleteStudent(), mockCreateStudent()];
export const worker = setupWorker(...handlers);
