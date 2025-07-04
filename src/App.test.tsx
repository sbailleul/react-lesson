import { afterEach, beforeAll, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { default as userEvent } from "@testing-library/user-event";

import React, { useEffect, useState } from "react";
import { server } from "@/test/server";
import { http, HttpResponse } from "msw";
type Props = { title: string };
interface SessionResponse {
  id: string;
}


function SessionCard({ title }: Props) {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>();
  useEffect(() => {
    fetch("http://fake-api/api/v1/session")
      .then((res) => res.json())
      .then((data: SessionResponse) => {
        setId(data.id);
      });
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <span>Id: {id}</span>
      <span>Name: {name}</span>
      <ErrorBoundary fallback={<span>Erreur</span>}>
        <label htmlFor="name-input">Session Name</label>
      </ErrorBoundary>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

describe("SessionCard", () => {
  beforeAll(() => {
    server.use(
      http.get("*/api/v1/session", async () => {
        return HttpResponse.json({ id: "session-123" });
      })
    );
    server.listen();
  });
  afterEach(cleanup);
  it("should render the title", async () => {
    render(<SessionCard title="Session 1" />);
    screen.getByText("Session 1");
  });

  it("should modify name of user on user typing", async () => {
    render(<SessionCard title="Session 1" />);
    const nameInput = screen.getByLabelText("Session Name");
    await userEvent.type(nameInput, "Nouvelle session");
    screen.getByText("Name: Nouvelle session");
  });

  it("should display session id returned from api", async () => {
    render(<SessionCard title="Session 1" />);
    await screen.findByText("Id: session-123");
  });
});
