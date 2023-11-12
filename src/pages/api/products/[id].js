import { products } from '@/data/products';

async function handler(req, res) {
  const { id } = req.query;
  console.log(`[${req.method}] [products]`);

  switch(req.method) {
  case 'GET':
    res.status(200).json(products[id]);
    break;

  case 'PUT':
    console.log(req.body);

    const product = req.body;

    products[id] = product;

    res.status(200).json(product);
    break;

  case 'DELETE':
    products.splice(id, 1);

    res.status(200).json({ msg: 'Deleted successfully' });
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
