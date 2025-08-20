import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";


describe('ItemCounter', () => {
    test('Should render with default values', () => {
        const name = 'Test item';

        render(<ItemCounter name={name} />)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('Should render custom quantity', () => {
        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined();
    });
});