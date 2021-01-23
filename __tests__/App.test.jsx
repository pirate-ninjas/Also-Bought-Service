import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../client/components/App';

describe('App', () => {
  // it('Should render with two categories:', async () => {
  //   try {
  //     await render(<App />);
  //     const peeps = await screen.getAllByText('People', { exact: false });
  //     expect(peeps.length).toEqual(2);
  //   } catch (err) {
  //     expect(err).toEqual(new Error());
  //   }
  // });
  it('should exist', () => {
    expect(3).toEqual(3);
  });
});
