import testHelper from "../testHelper";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Game from "./Game";

it("should render Game component", async () => {
  const { getAllByRole } = testHelper.renderTest(<Game/>);
  expect(getAllByRole("button")).toHaveLength(10);
});

it("should render Game component and fireevent with click on button", async () => {
    const { getAllByRole } = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(10);
    fireEvent.click(getAllByRole("button")[0]);
  });

  it("should render value in button after click on button and return winner in status", async () => {
    const { getAllByRole, getByText, getAllByText} = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(10);
    fireEvent.click(getAllByRole("button")[0]);
    expect(getByText("X")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[3]);
    expect(getAllByText("X")).toHaveLength(1);
    expect(getByText("O")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[1]);
    expect(getAllByText("X")).toHaveLength(2);
    fireEvent.click(getAllByRole("button")[4]);
    expect(getAllByText("O")).toHaveLength(2);
    fireEvent.click(getAllByRole("button")[2]);
    expect(getAllByText("X")).toHaveLength(3);
    fireEvent.click(getAllByRole("button")[3]);
    expect(getByText("Winner Is X")).toBeInTheDocument();
  });

  it("should jump to move that clicked", async () => {
    const { getAllByRole, getByText, getAllByText} = testHelper.renderTest(<Game/>);
    expect(getAllByRole("button")).toHaveLength(10);
    fireEvent.click(getAllByRole("button")[0]);
    expect(getByText("X")).toBeInTheDocument();
    expect(getByText("Go To # 1")).toBeInTheDocument();
    expect(getByText("Next Player Is O")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[3]);
    expect(getAllByText("X")).toHaveLength(1);
    expect(getByText("O")).toBeInTheDocument();
    expect(getByText("Go To # 2")).toBeInTheDocument();
    expect(getByText("Next Player Is X")).toBeInTheDocument();
    fireEvent.click(getAllByRole("button")[1]);
    expect(getAllByText("X")).toHaveLength(2);
    expect(getByText("Go To # 3")).toBeInTheDocument();
    expect(getByText("Next Player Is O")).toBeInTheDocument();
    fireEvent.click(getByText("Go To # 2"));
    expect(getAllByText("X")).toHaveLength(1);
  });