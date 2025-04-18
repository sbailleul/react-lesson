import "@/index.scss";
import { server } from "@/test/server";
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach } from "vitest";

beforeEach(() => {
	server.listen();
});
afterEach(() => {
	server.close();
});
