import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { RegisterComponent } from "./register.component";
import {
  RegisterWrapper,
  RegisterPanel,
  PanelHeader,
  PanelBody,
  Actions
} from "./register.style";
import "@testSetup";

describe.only("Register", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <RegisterComponent t={key => key} providers={[]} />
      </Router>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  test("renders with styled components", () => {
    expect(wrapper.find(RegisterWrapper)).toBeTruthy();
    expect(wrapper.find(RegisterPanel)).toBeTruthy();
    expect(wrapper.find(PanelHeader)).toBeTruthy();
    expect(wrapper.find(PanelBody)).toBeTruthy();
    expect(wrapper.find(Actions)).toBeTruthy();
  });
  test("renders title properly", () => {
    expect(
      wrapper.containsMatchingElement(<h1>register.title</h1>)
    ).toBeTruthy();
  });
});
