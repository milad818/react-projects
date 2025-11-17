

import { render, screen } from '@testing-library/react'
import { expect, it, describe, vi } from 'vitest';  // renders a component in a fake web page
import { Product } from './Product';


// Component testing requires further libraries to be installed
// GO TO README.md
describe('Product Component', () => {
  it('displays the product details correctly', () => {
    const product = {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"]
  }

    // Mock for loadCart (creates a fake function)
    const loadCart = vi.fn();

    render(<Product product={product} loadCart={loadCart} />)

    // Test if the text appears on the screen
    expect(
      screen.getByText('Intermediate Size Basketball')
    ).toBeInTheDocument();  // method toBeInTheDocument added by testing-library/jest-dom

    // Test if the price is displayed on the screen
    expect(
      screen.getByText('$20.95')
    ).toBeInTheDocument();

    // Test if the image is displayed on the screen
    // In this case, cannot use getByText()
    // Add an attribute in product image inside Product component
    // So that one can access it through its id
    expect(
      screen.getByTestId('product-image')
    ).toHaveAttribute('src', 'images/products/intermediate-composite-basketball.jpg')

    // Test stars
    expect(
      screen.getByTestId('product-rating-stars-image')
    ).toHaveAttribute('src', 'images/ratings/rating-40.png')

    // Test rating count
    expect(
      screen.getByText('127')
    ).toBeInTheDocument();
  });
});