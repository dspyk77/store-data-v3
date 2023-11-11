import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function EditProduct() {
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: 0, // Set a default value or use a different initial value
    name: '',
    category: '',
    price: '',
    weight: ''
  });

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

          if (response.ok) {
            const productData = await response.json();
            setProduct(productData);
            setFormData({
              id: Number(productData.id), // Convert to a number
              name: productData.name,
              category: productData.category,
              price: productData.price,
              weight: productData.weight
            });
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

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // If edit is successful, redirect to the product list page
        router.push('/products');
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h1>Edit Product</h1>

      {product ? (
        <>
          <Table variant='dark' size="sm" responsive className="edit-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ID:</td>
                <td>{formData.id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Weight:</td>
                <td>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </Table>

          <Button variant="dark" onClick={handleEdit}>
            Save Changes
          </Button>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
}

export default EditProduct;
