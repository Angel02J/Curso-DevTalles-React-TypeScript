import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react';
import MyAwesomeApp from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {

        render(<MyAwesomeApp />);

        screen.debug();
    });
});