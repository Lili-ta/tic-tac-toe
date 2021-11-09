import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Squares from './Squares'

it('should render button in squares', async () => {
  render(<Squares/>)
  expect(screen.getByRole('button')).toBeInTheDocument();
})
