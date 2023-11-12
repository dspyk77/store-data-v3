import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const sendCreateProductRequest = async () => {
    const newProduct = {
      name: name,
      category: category,
      price: price,
      weight: weight
    };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (response.ok) {
        // Assuming the server sends back the created product with its ID
        const createdProduct = await response.json();
        console.log(createdProduct);

        // Redirect to the products page after creation
        router.push('/products');
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Category:</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Weight:</Form.Label>
        <Form.Control
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-3" variant="dark" type="button" onClick={sendCreateProductRequest}>
        Create Product
      </Button>
    </Form>
  );
};

export default ProductForm;
