import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router} from "react-router-dom";

const renderTest = (element) => render(
    <Router>
    {element}
    </Router>
)

const testHelper = {
    renderTest
};

export default testHelper;


