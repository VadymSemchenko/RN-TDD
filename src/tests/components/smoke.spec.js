import React from 'react';
import { shallow } from 'enzyme';

import AddRestaurantModal from '../../components/AddRestaurantModal';
import { NEW_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } from '../../../constants/testIDs';

describe('Text', () => {
  const messageText = 'Test Text';
  const testID = id => cmp => cmp.props().testID === id;
  it('calls the onSave handler with the entered text', () => {
    const handleSave = jest.fn();
    const wrapper = shallow(
      <AddRestaurantModal handleSaveRestaurant={handleSave} visible={true} />,
    );
    wrapper.findWhere(testID('NewRestaurantTextInput')).simulate('changeText', messageText);
    wrapper.findWhere(testID('SaveRestaurantButton')).simulate('press');
    expect(handleSave).toHaveBeenCalledWith(messageText);
  });
});
