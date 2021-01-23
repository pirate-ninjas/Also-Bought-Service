/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../client/components/Item';

describe('Item', () => {
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
  it('Should not initially render description:', async () => {
    try {
      await render(<Item key={1} item={mockData} idx={1} mod={1} />);
      const description = document.getElementsByClassName('onHoverDisplay');
      expect(description[0]).toBe(undefined);
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should render description on hover:', async () => {
    try {
      await render(<Item key={1} item={mockData} idx={1} mod={1} />);
      let description = document.getElementsByClassName('onHoverDisplay');
      expect(description.length).toBe(0);
      userEvent.hover(screen.getByTitle('itemtest'));
      description = document.getElementsByClassName('onHoverDisplay');
      expect(description.length).toBe(1);
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });
});
