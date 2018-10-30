// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Heading from "../index";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "../consts";
import defaultTokens from "../../defaultTokens";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Heading in H2, type Title1, not inverted", () => {
  const element = ELEMENT_OPTIONS.H2;
  const type = TYPE_OPTIONS.TITLE1;
  const children = "My lovely heading";
  const inverted = false;
  const dataTest = "test";

  const component = shallow(
    <Heading element={element} type={type} inverted={inverted} dataTest={dataTest}>
      {children}
    </Heading>,
  );
  it("should contain children", () => {
    expect(
      component
        .find("Heading__StyledHeading")
        .render()
        .text(),
    ).toBe(children);
  });
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("element")).toBe(element);
    expect(component.prop("inverted")).toBe(inverted);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it(`should have been rendered in ${type}`, () => {
    expect(component.render().prop("name")).toBe(element);
  });
  it("should have margin-bottom", () => {
    const mounted = mount(<Heading spaceAfter={SPACINGS_AFTER.NORMAL}>{children}</Heading>);
    expect(mounted).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceSmall);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
