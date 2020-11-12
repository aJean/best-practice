import * as React from 'react';
import Container from '../src/component/container';
import { configure, shallow } from 'enzyme';
const Adapter = require("enzyme-adapter-react-16");

/**
 * @file Stateless 渲染结果测试
 */

configure({ adapter: new Adapter() });

test('Container render result test', () => {
    const component = shallow(<Container list={['good']} />);

    expect(component.find('section').length).toBe(1);
});