import React, { useState, useEffect } from 'react';

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products', {
        method: 'GET'
      });

      if (response.ok) {
        const products = [
          {
            'id': 0,
            'name': 'Apple',
            'category': 'Produce',
            'price': '1.00',
            'weight': '.5'
          },
          {
            'id': 1,
            'name': 'Box of Nails',
            'category': 'Hardware',
            'price': '1.00',
            'weight': '.5'
          }
        ];
        setProducts(products);
      } else {
        console.error(response);
      }
    };

    fetchProducts();
  }, []);

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
      </tr>
    );

    rows.push(row);
  }

  return (
    <>
      <h1 className="my-4 text-2xl">Products</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Weight</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}

export default Page;
