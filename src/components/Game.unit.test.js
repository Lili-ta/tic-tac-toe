import testHelper from "../testHelper";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Game from "./Game";

it("should render Game component", async () => {
  const { getByText, getByRole } = testHelper.renderTest(<Game/>);
  expect(getByRole("button")).toBeInTheDocument();
});
