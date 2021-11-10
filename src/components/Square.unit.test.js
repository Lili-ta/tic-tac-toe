import testHelper from "../testHelper";
import "@testing-library/jest-dom/extend-expect";
import Square from "./Square";

const props = {
  onClick: jest.fn(),
  value: ["X"],
};

it("should render correct Square value", async () => {
  const { getByText } = testHelper.renderTest(<Square {...props} />);
  expect(getByText("X")).toBeInTheDocument();
});
