

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';  // lets us simulate events e.g., a click
import { expect, it, describe, vi } from 'vitest';  // renders a component in a fake web page
import { Product } from './Product';
import axios from 'axios';


// Mock entire axios package
vi.mock('axios');


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


  // Test 'Add to Cart' button
  it('adds product to the cart as expected', async () => {
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

    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId('add-to-cart-button')
    await user.click(addToCartButton);   // simulates the click event

    // Check if axios.post is called and values are passed correctly
    expect(axios.post).toHaveBeenCalledWith(
      '/api/cart-items',
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
      }
    );

    // Check if our code ran loadCart
    // Remember that in the corresponding async func, firt posted and then cart re-loaded
    expect(loadCart).toHaveBeenCalled();
  });
});