// @flow
import React from 'react';
import { mount } from 'enzyme';

import RestrictedProfileJoinCard from './RestrictedProfileJoinCard';

it('loads without error', () => {
  expect(mount(<RestrictedProfileJoinCard />)).toBeTruthy();
});
