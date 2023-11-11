import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products', {
        method: 'GET'
      });

      if (response.ok) {
        const products = await response.json();
        // [
        //   {
        //     'id': 0,
        //     'name': 'Apple',
        //     'category': 'Produce',
        //     'price': '1.00',
        //     'weight': '.5'
        //   },
        //   {
        //     'id': 1,
        //     'name': 'Box of Nails',
        //     'category': 'Hardware',
        //     'price': '1.00',
        //     'weight': '.5'
        //   }
        // ];
        setProducts(products);
      } else {
        console.error(response);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');

    if (confirmation) {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          // If deletion is successful, update the products state
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const rows = [];
  for (let product of products) {
    const key = `${product.id}`;

    const row = (
      <tr key={key}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.weight}</td>
        <td>
          <Link href={`/products/${product.id - 1}`}>Show</Link>
          <span> | </span>
          <Link href={`/products/${product.id - 1}/edit`}>Edit</Link>
          <span> | </span>
          <Link href="" onClick={() => handleDelete(product.id)}>Delete</Link>
        </td>
      </tr>
    );

    rows.push(row);
  }

  return (
    <>
      <h1 className="my-4 text-2xl">Products</h1>

      <Table responsive="md" variant='dark' hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Weight</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </Table>

      <Button variant="dark" href="products/new">Add Product</Button>
    </>
  );
}

export default Page;
