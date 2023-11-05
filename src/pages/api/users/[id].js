import { users } from '@/data/users';

async function handler(req, res) {
  const { id } = req.query;
  console.log(`[${req.method}] [Users]`);

  switch(req.method) {
  case 'GET':
    res.status(200).json(users[id]);
    break;

  case 'PUT':
    console.log(req.body);

    const user = req.body;

    users[id] = user;

    res.status(200).json(user);
    break;

  case 'DELETE':
    users.splice(id, 1);

    res.status(200).json({ msg: 'Deleted successfully' });
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
