import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Square from './Square'

it('should render button in squares', async () => {
  render(<Square/>)
  expect(screen.getByRole('button')).toBeInTheDocument();
})
