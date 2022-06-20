import React from 'react';
import {render} from '@core-utils';
import {XB_Dropdown} from './drop-down.component';

describe('XB_Dropdown', () => {
  it('should render error hero card correctly', () => {
    const dropdown = render(
      <XB_Dropdown label="Product Type" data={[]} onSelect={() => jest.fn()} />
    );
    expect(dropdown).toMatchSnapshot();
  });
});
