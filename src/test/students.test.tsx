import { App } from "@/App";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it } from "vitest";

describe("Students management", () => {
  it("should create student", async () => {
    render(<App />);

    const firstnameInput = screen.getByLabelText("Firstname :");
    const lastnameInput = screen.getByLabelText("Lastname :");
    const classInput = screen.getByLabelText("Class :");
    await userEvent.type(firstnameInput, "John");
    await userEvent.type(lastnameInput, "Doe");
    await userEvent.type(classInput, "AL-2");
    const addBtn = screen.getByText("Add student");
    await userEvent.click(addBtn);

  });

  it('should display students', () => {
    
  })
});
