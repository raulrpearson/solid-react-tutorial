import React from "react";
import { shallow } from "enzyme";
import AuthNavBar from "./auth-nav-bar.component";
import { BrowserRouter as Router } from "react-router-dom";

import "@testSetup";

const setup = () =>
  shallow(
    <Router>
      <AuthNavBar t={key => key} />
    </Router>
  );

describe.only("AuthNavBar", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = setup();
  });
  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });
});
