import { shallow } from "enzyme";
import Index from "../js/components";
import React from "react";


test('is rendering', () => {
    const component = shallow(<Index/>);

    expect(component.text()).toBe('React');
});
