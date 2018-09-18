import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import Icon from "./../Icon";

describe("<Icon />", () => {
  it("Le componsant doit être rendu", () => {
    shallow(<Icon />);
  });

  it("La fonction onClick doit être appelée", () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Icon onClick={spy} />);

    wrapper.simulate("click");

    expect(spy.calledOnce).to.eq(true);
  });
});
