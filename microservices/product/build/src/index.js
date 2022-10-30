"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_service_1 = __importDefault(require("./config/client-service"));
let productCollection = [
    { id: 1, description: 'Bike Oggi', clientId: 1 },
    { id: 2, description: 'Bike Adx', clientId: 2 },
];
async function persist(product) {
    const id = productCollection[productCollection.length - 1].id + 1;
    const clientExist = await client_service_1.default.get(`/find?id=${product.clientId}`);
    if (!clientExist) {
        throw new Error('this client does exist');
    }
    productCollection.push({ ...product, id });
}
exports.default = (router) => {
    router.get('/find', (_, res) => {
        res.send(productCollection);
    });
    router.post('/persist', (req, res) => {
        persist(req.body);
        res.sendStatus(200);
    });
};
//# sourceMappingURL=index.js.map