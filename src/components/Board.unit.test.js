import React from 'react';
import testHelper from "../testHelper";
import {fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';

const props={
    onClick:jest.fn(),
    squares:["X","O","X"]
};

it('should render Board', async () => {
    const {getByText, getAllByText} = testHelper.renderTest(<Board {...props}/>)
  expect(getByText("O")).toBeInTheDocument();
  expect(getAllByText("X").length).toBe(2);
})