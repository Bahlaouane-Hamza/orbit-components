// @flow

import * as React from "react";
import { mount } from "enzyme";

import ButtonLink from "../index";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";

const children = "ButtonLink";
const href = "https://kiwi.com";

describe("ButtonLink with Icon", () => {
  const dataTest = "test";
  const submit = true;
  const component = mount(
    <ButtonLink href={href} external dataTest={dataTest} submit={submit}>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should have data-test", () => {
    expect(button.render().prop("data-test")).toBe(dataTest);
  });
  it("should have type submit", () => {
    expect(button.prop("submit")).toBe(submit);
  });
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(false);
  });
  it("should be external", () => {
    expect(button.prop("target")).toBe("_blank");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("ButtonLink with Icon", () => {
  const component = mount(
    <ButtonLink iconLeft={<Airplane />} iconRight={<ChevronDown />} href={href}>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should have href", () => {
    expect(button.render().prop("href")).toBe(href);
  });
  it("should contain icons", () => {
    expect(button.find("Airplane").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
