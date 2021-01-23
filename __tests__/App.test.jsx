/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../client/components/App';

function makeData(num) {
  const mockData = {
    itemNum: 1,
    name: 'test test',
    brand: 'test test',
    price: 666,
    colors: ['test', 'test'],
    description: 'test test',
    img_url: 'www.google.com',
    category: 'test test',
    rating: 4.25,
    reviews: 666,
    features: ['test test', 'test test'],
  };
  const mockItems = [];
  for (let i = 0; i < num; i++) {
    mockItems.push(mockData);
  }
  return mockItems;
}

describe('App', () => {
  jest.mock('axios');
  it('Should render:', async () => {
    // const data = makeData(9);
    try {
      await render(<App />);
      const container = document.getElementsByClassName('container');
      expect(container.length).toEqual(1);
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });
});
