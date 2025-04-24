import "whatwg-fetch";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks/server.js";
//import { describe, expect, it } from "vitest";
import AuthProvider, { AuthContext } from "../context/AuthProvider.jsx";
import MovieList from "../components/MovieList/MovieList.jsx";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MovieList komponent", () => {
    it("hämtar GET /movies", async () => {
        render(
            <AuthContext.Provider value={{ user: "mocked-jwt-token" }}>
                <MovieList />
            </AuthContext.Provider>
        );
    
        await waitFor(() => {
            expect(screen.getByText(/A movie with a name here/)).toBeInTheDocument();
            expect(screen.getByText(/Some Totally Real Person/)).toBeInTheDocument();
            expect(screen.getByText(/It's a movie that you watch with your eyes open/)).toBeInTheDocument();
            expect(screen.getByText(/2005/)).toBeInTheDocument();
        })
    });
});