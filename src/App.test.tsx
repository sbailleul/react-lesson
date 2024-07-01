import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "@/App";
import { debug } from "vitest-preview";
import { InputToTest } from "@/InputToTest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
const pokeImg = "http://sprites/test-sprite.png";
const server = setupServer(
  http.get("https://pokeapi.co/api/v2/pokemon/pikachu", () => {
    HttpResponse.json({
      sprites: { back_default: pokeImg },
    });
  })
);
describe("Input to test", () => {
  beforeEach(() => {
    server.listen();
  });
  it("should get valid pokemon img for pikachu", async () => {
    render(<App />);
    const fetchBtns = screen.getAllByText("show pokemon");
    const imgs = screen.getAllByTestId<HTMLImageElement>("pokemon-img");
    const user = userEvent.setup();
    await user.click(fetchBtns[0]);
    waitFor(() => expect(imgs[0].src).toBe(pokeImg), { timeout: 2000 });
    debug();
  });
  it("should display my component", async () => {
    render(<InputToTest />);
    const input = screen.getByLabelText<HTMLInputElement>("Foo");
    const user = userEvent.setup();
    await user.type(input, "todo");
    const title = screen.getByTestId("input-value");
    expect(title.textContent).toBe("todo");
  });
});
