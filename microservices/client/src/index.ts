import type {Router} from 'express';

let clientCollection = [
  {id: 1, name: 'Jonathan', email: 'jonathanmullerkunz@gmail.com'},
  {id: 2, name: 'Fulano', email: 'fulano@gmail.com'},
];

type UserData = {
  id: number;
  name: string;
  email: string;
};

function persist(user: UserData) {
  const id = clientCollection[clientCollection.length - 1].id + 1;
  clientCollection.push({...user, id});
}

function findById(id: number) {
  return clientCollection.find(e => e.id === id);
}

export default (router: Router): void => {
  router.get('/find', (req, res) => {
    if (req.query?.id) {
      console.log(findById(Number(req.query.id)));
      res.send(findById(Number(req.query.id)));
      return;
    }
    res.send(clientCollection);
  });
  router.post('/persist', (req, res) => {
    persist(req.body);
    res.sendStatus(200);
  });
};
