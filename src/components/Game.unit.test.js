import testHelper from "../testHelper";
import { fireEvent, waitFor, screen } from "@testing-library/react";
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
    const { getAllByRole, getByText} = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(9);
    fireEvent.click(getAllByRole("button")[0]);
    expect(getByText("O")).toBeInTheDocument();
  });