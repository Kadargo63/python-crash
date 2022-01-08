import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About '..';

afterEach(cleanup);
describe('About component', () => {
    // First Test
    it('renders', () => {
    render(<About />);
    });

    // Second Test
})

