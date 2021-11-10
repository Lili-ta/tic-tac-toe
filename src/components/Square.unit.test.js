import testHelper from "../testHelper";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Square from "./Square";

const props = {
  onClick: jest.fn(),
  value: ["X"],
};

it("should render Board", async () => {
  const { getByText } = testHelper.renderTest(<Square {...props} />);
  expect(getByText("O")).toBeInTheDocument();
});
