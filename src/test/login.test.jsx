import "whatwg-fetch";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks/server";
import { fireEvent, render, screen } from "@testing-library/react";
import AuthProvider from "../context/AuthProvider";
import Login from "../components/Login/Login";
import React from "react";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Login komponent", () => {
    it("hämtar och sparar jwt i localstorage token genom att trycka på logga in", async () => {
        render(
            <AuthProvider>
                <Login />
            </AuthProvider>
        );
    
        const loginButton = screen.getByRole("button", { name: /login/i });
    
        const usernameInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");
    
        fireEvent.change(usernameInput, {
            target: { value: "axel" }
        });
    
        fireEvent.change(passwordInput, {
            target: { value: "123456789" }
        });
    
        fireEvent.click(loginButton);
    });
});

