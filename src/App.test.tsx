import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "@/App";
import { debug } from "vitest-preview";
import { TestInput } from "@/TestInput";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
const server = setupServer(
  http.get('https://pokeapi.co/api/v2/pokemon/pikachu', () => {
    return HttpResponse.json({ sprites: { front_default: "pokeSrc" } });
  })
);

describe("App", () => {
  beforeEach(() => server.listen());
  it("should change poke img", async () => {
    render(<App/>)
    const pokeImg = await screen.findAllByTestId('poke-img')
    expect(pokeImg[0]).toHaveAttribute('src', 'pokeSrc')
  });
});

describe("Test input", () => {
  afterEach(cleanup);
  it("should render", () => {
    const { container } = render(<TestInput />);
    expect(container).toBeDefined();
  });
  it("should display label label", () => {
    render(<TestInput />);
    screen.getByText("Label");
  });
  it("should display input associated to label", () => {
    render(<TestInput />);
    screen.getByLabelText<HTMLInputElement>("Label");
  });
  it("should display changed value in uppercase", async () => {
    render(<TestInput />);
    const input = screen.getByLabelText<HTMLInputElement>("Label");
    const user = userEvent.setup();
    await user.type(input, "testValue");
    screen.getByText("TESTVALUE");
    debug();
  });
});
