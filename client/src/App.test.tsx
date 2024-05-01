import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "@/App";
import { debug } from "vitest-preview";
describe("App", () => {
  it("should increment count on click", async () => {
    render(<App />);
    const user = userEvent.setup();
    debug();
    const countBtn = await screen.findByText("Count is 0");
    await user.click(countBtn);
  });
});
