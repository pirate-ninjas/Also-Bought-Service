/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemList from '../client/components/ItemList';

describe('ItemList', () => {
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
  it('Should only render one card for one item:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(1)} mod={1} />);
      const cards = document.getElementsByClassName('productcard');
      expect(cards.length).toEqual(1);
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should render four cards for >4 items:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(7)} mod={1} />);
      const cards = document.getElementsByClassName('productcard');
      expect(cards.length).toEqual(4);
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should NOT initially render left slide button:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(4)} mod={1} />);
      const slideLeft = document.getElementsByClassName('slideLeft');
      expect(slideLeft.length).toEqual(1);
      expect(slideLeft[0].style.visibility).toBe('hidden');
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should NOT render the right slide button for <= 4 items:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(4)} mod={1} />);
      const slideRight = document.getElementsByClassName('slideRight');
      expect(slideRight.length).toEqual(1);
      expect(slideRight[0].style.visibility).toBe('hidden');
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should render the right slide button for > 4 items:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(5)} mod={1} />);
      const slideRight = document.getElementsByClassName('slideRight');
      expect(slideRight.length).toEqual(1);
      expect(slideRight[0].style.visibility).toBe('visible');
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });

  it('Should render the left slide button for > 4 items once carousel is moved to the right:', async () => {
    try {
      await render(<ItemList key="carousel1" items={makeData(5)} mod={1} />);
      const slideLeft = document.getElementsByClassName('slideLeft');
      const slideRight = document.getElementsByClassName('slideRight');
      const rightClick = screen.getByText('→');
      expect(slideLeft.length).toEqual(1);
      expect(slideRight.length).toEqual(1);
      expect(slideRight[0].style.visibility).toBe('visible');
      expect(slideLeft[0].style.visibility).toBe('hidden');
      fireEvent.click(rightClick);
      expect(slideRight[0].style.visibility).toBe('hidden');
      expect(slideLeft[0].style.visibility).toBe('visible');
    } catch (err) {
      expect(err).toEqual(new Error());
    }
  });
});
