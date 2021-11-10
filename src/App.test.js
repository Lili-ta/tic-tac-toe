import testHelper from "./testHelper";
import App from './App';


it("should render correct status in app", async () => {
  const { getByText } = testHelper.renderTest(<App/>);
  expect(getByText("Start The Game")).toBeInTheDocument();
  expect(getByText("Next Player Is X")).toBeInTheDocument();
});

