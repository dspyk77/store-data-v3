import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Page() {
  const [product, setProduct] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
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

  return (
    <>
      <h1>Product</h1>

      {product ? (
        <>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Weight: {product.weight}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Page;
