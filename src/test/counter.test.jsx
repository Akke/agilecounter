import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server.js";
import "whatwg-fetch";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter/Counter.jsx";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("visar att count är 0 som standard", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeDefined();
});