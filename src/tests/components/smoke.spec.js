import React from 'react';
import { shallow } from 'enzyme';
import AddRestaurantModal from '../../components/AddRestaurantModal';

describe('Text', () => {
  const messageText = 'Test Text';
  const testID = id => cmp => cmp.props().testID === id;
  it('calls the onSave handler with the entered text', () => {
    const handleSave = jest.fn();
    const wrapper = shallow(<AddRestaurantModal onSave={handleSave} />);
    wrapper.findWhere(testID('restaurantNameTextField')).simulate('changeText', messageText);
    wrapper.findWhere(testID(testID('saveRestaurant'))).simulate('press');
    expect(handleSave).toHaveBeenCalledWith(messageText);
  });
});
