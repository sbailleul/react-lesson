import { afterEach, beforeAll, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { server } from "@/test/server";
import { http, HttpResponse } from "msw";
type Props = { title: string };
type SlotResponse = {
  slots: string[];
};
export function SessionCard({ title }: Props) {
  const [sessionName, setSessionName] = useState(title);
  const [slots, setSlots] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/v1/sessions/slots")
      .then((res) => res.json())
      .then((data: SlotResponse) => {
        setSlots(data.slots);
      });
  }, []);
  return (
    <div>
      <h1>Session {sessionName}</h1>
      <label htmlFor="session-name">Nom de la session :</label>
      <div className="d-flex flex-column">
        {slots.map((slot) => (
          <div key={slot} className="d-flex flex-row">
            {slot}
          </div>
        ))}
      </div>
      <input
        id="session-name"
        type="text"
        value={sessionName}
        onChange={(e) => setSessionName(e.target.value)}
      />
    </div>
  );
}
describe("SessionCard", () => {
  afterEach(() => cleanup());
  beforeAll(() => {
    server.use(
      http.get("*/api/v1/sessions/slots", async () => {
        return HttpResponse.json({
          slots: ["Lundi 8h30", "Lundi 10h30", "Mardi 8h30", "Mardi 10h30"],
        });
      })
    );
    server.listen();
  });
  it("should display default title", () => {
    render(<SessionCard title="Laboratoire de la mort !" />);
    screen.getByText("Session Laboratoire de la mort !");
  });
  it("should handle title typing", async () => {
    render(<SessionCard title="Laboratoire de la mort !" />);
    const input = screen.getByLabelText("Nom de la session :");
    await userEvent.clear(input);
    await userEvent.type(input, "Session 1");
    screen.getByText("Session Session 1");
  });
  
  it("should display slots", async () => {
    render(<SessionCard title="Laboratoire de la mort !" />);
    await screen.findByText("Lundi 8h30");
  });
});
