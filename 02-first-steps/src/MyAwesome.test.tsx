import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import MyAwesomeApp from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {

        const { container } = render(<MyAwesomeApp />);

        // screen.debug();

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Jose');

        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toContain('Lugo');


    });

    test('Should render firstName and lastName - screen', () => {

        render(<MyAwesomeApp />);

        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        // console.log(h1.innerHTML);

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Jose');
    });
});