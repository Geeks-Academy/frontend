import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from 'components/atoms/Header'

describe('Header', () => {
    test('render Header component', () => {
        render(<Header />)
    })
    test('Header should have title', () => {
        const text = 'Once upon a time ...'
        const { getByText } = render(<Header title={text} />)
        expect(getByText(new RegExp(text, 'i')));
    })
})