import testHelper from "../testHelper";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import * as handler from "../appHelpers";
import "@testing-library/jest-dom/extend-expect";
import Game from "./Game";

it("should render Game component", async () => {
  const { getAllByRole } = testHelper.renderTest(<Game/>);
  expect(getAllByRole("button")).toHaveLength(9);
});

it("should render Game component and fireevent with click on button", async () => {
    const { getAllByRole } = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(9);
    fireEvent.click(getAllByRole("button")[0]);
  });

  it("should render value in button after click on button", async () => {
    let check = jest.spyOn(handler,"calculateWinner");
    let squares = ["X","O","X","O","X"];
    let output = check(squares);
    const { getAllByRole, getByText, getAllByText} = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(9);
    fireEvent.click(getAllByRole("button")[0]);
    expect(getByText("X")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[1]);
    expect(getAllByText("X")).toHaveLength(1);
    expect(getByText("O")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[4]);
    expect(getAllByText("X")).toHaveLength(2);
    fireEvent.click(getAllByRole("button")[2]);
    expect(getAllByText("O")).toHaveLength(2);
    fireEvent.click(getAllByRole("button")[8]);
    expect(getAllByText("X")).toHaveLength(3);
    fireEvent.click(getAllByRole("button")[3]);
    expect(output).toEqual("O")
  });