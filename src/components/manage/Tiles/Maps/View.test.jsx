import React from 'react';
import renderer from 'react-test-renderer';
import View from './View';

test('renders a view map component', () => {
  const component = renderer.create(
    <View data={{ url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.1588325439866!2d14.375751314853806!3d40.62637905078705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9ead3c50b6e3%3A0x8269b49eeba4177d!2sHotel+Sorrento+City!5e0!3m2!1sen!2sin!4v1549980037453' }} />,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
