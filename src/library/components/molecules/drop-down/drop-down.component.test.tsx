import React from 'react';
import {render} from '@testing-library/react-native';
import {Dropdown} from './drop-down.component';

describe('Dropdown', () => {
  it('should render error hero card correctly', () => {
    const dropdown = render(
      <Dropdown label="Product Type" data={[]} onSelect={() => jest.fn()} />,
    );
    expect(dropdown).toMatchSnapshot();
  });
});
