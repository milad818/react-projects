

import { render, screen, within } from '@testing-library/react'
import { expect, it, describe, vi, beforeEach } from 'vitest';  // renders a component in a fake web page
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { HomePage } from './HomePage';


vi.mock('axios');

describe('HomePage Component', () => {
  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();

    // Mock the implementation (do what we want - get data as a promise)
    // When we run axios.get, it runs the fake function mockImplementation
    // It should return axactly what axios.get returns
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === '/api/products') {
        // Test some products
        return {
          data: [{
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
          },
          {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"]
          }]
        };
      }
    });
  });

  it('display the products at hoempage correctly', async () => {
    render(
      // When testing and <Link> present in component, we wrap in <MemoryRouter> when testing
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    // Test if two components retrieved
    // Use findAllByTestId instead of getAllByTestId
    // Since it needs to wait and load something (products)
    const productContainers = await screen.findAllByTestId('product-container');

    expect(productContainers.length).toBe(2)

    // Check a specific product to see if it has the correct name
    expect(
      within(productContainers[0])
        .getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument();

    expect(
      within(productContainers[1])
        .getByText('Intermediate Size Basketball')
    ).toBeInTheDocument();
  });
}); 