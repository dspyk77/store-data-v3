import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

function Page() {
  const [product, setProduct] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log('Current ID:', id);
    const fetchProduct = async () => {
      try {
        // Check if id is truthy (not null or undefined) before making the request
        if (id) {
          const response = await fetch(`/api/products/${id}`, {
            method: 'GET',
          });

          console.log(response); // Log the entire response

          if (response.ok) {
            const productData = await response.json();
            setProduct(productData);
          } else {
            console.error(response);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Make the fetch request
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');

    if (confirmation && id) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          // If deletion is successful, redirect to the product list page
          router.push('/products');
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <h1>Product</h1>

      {product ? (
        <>
          <Button variant="dark" className="mb-4 me-auto" href="/products">Back</Button>

          <Table variant='dark' size="sm" responsive className="show-table">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Name:</td>
                <td>{product.name}</td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td>Weight:</td>
                <td>{product.weight}</td>
              </tr>
            </tbody>
          </Table>

          <Link href="">Edit</Link>

          <span> | </span>

          <a href="#" onClick={handleDelete}>Delete</a>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
}

export default Page;
