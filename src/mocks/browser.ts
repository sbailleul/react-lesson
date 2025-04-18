import { mockStudents } from "@/mocks/students";
import { setupWorker } from "msw/browser";
const handlers = [mockStudents()];
export const worker = setupWorker(...handlers);
