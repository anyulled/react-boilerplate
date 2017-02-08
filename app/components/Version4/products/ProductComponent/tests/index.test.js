import ProductComponent from '../index';

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';


describe('<ProductComponent />', () => {
  const products = [
    { level3: 'Level 3 product', level2: 'Level 2 product', level1: 'Level 1 product' },
    { level3: 'Level 3 product', level2: 'Level 2 product', level1: 'Level 1 product' },
    { level3: 'Level 3 product', level2: 'Level 2 product', level1: 'Level 1 product' },
  ];

  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<ProductComponent products={products} />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
