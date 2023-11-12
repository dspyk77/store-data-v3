import { products } from '@/data/products';

async function handler(req, res) {
  console.log(`[${req.method}] [products]`);

  switch(req.method) {
  case 'GET':
    res.status(200).json(products);
    break;

  case 'POST':
    console.log(req.body);

    const product = req.body;

    product.id = (products.length + 1);

    products.push(product);

    res.status(200).json(product);
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
