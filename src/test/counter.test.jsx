import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server.js";
import "whatwg-fetch";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Counter from "../components/Counter/Counter.jsx";
import Login from "../components/Login/Login.jsx";
import React from "react";
import AuthProvider from "../context/AuthProvider.jsx";
import MovieList from "../components/MovieList/MovieList.jsx";
import App from "../App.jsx";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("visar att count är 0 som standard", () => {
  render(<Counter />);
  expect(screen.getByText("0")).toBeDefined();
});

it("logga in och fetch movies", async () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");

  fireEvent.change(usernameInput, {
    target: { value: "axel" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "123456789" },
  });

  fireEvent.click(loginButton);

  expect(await screen.findByText(/The titanic/i)).toBeInTheDocument();
  expect(await screen.findByText(/Bilar/i)).toBeInTheDocument();
  expect(await screen.findByText(/Jason Bourne/i)).toBeInTheDocument();
});
