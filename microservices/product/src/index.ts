import type {Router} from 'express';
import client from './config/client-service';

let productCollection = [
  {id: 1, description: 'Bike Oggi', clientId: 1},
  {id: 2, description: 'Bike Adx', clientId: 2},
];

type ProductData = {
  id: number;
  description: string;
  clientId: number;
};

async function persist(product: ProductData) {
  const id = productCollection[productCollection.length - 1].id + 1;
  const {data: clientExist} = await client.get(`/find?id=${product.clientId}`);

  if (!clientExist) {
    throw new Error('this client does exist');
  }

  productCollection.push({...product, id});
}

export default (router: Router): void => {
  router.get('/find', (_, res) => {
    res.send(productCollection);
  });
  router.post('/persist', (req, res) => {
    persist(req.body);
    res.sendStatus(200);
  });
};
