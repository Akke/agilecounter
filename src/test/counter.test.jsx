import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter/Counter.jsx";
import React from "react";

describe("Counter komponent", () => {
    it("visar att count är 0 som standard", () => {
        render(<Counter />);

        expect(screen.getByText("0")).toBeDefined();
    });

    it("visar att count ökar med 1 efter ett klick", () => {
        render(<Counter />);

        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(screen.getByText("1")).toBeDefined();
    });
});