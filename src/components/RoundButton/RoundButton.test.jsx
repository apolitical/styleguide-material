// @flow
import React from 'react';
import { mount } from 'enzyme';

import RoundButton from './RoundButton';

it('loads without error', () => {
  expect(mount(<RoundButton>Hello World</RoundButton>)).toBeTruthy();
});
