import { Router } from 'express';

import CustomersController from '../controller/CustomersController';

const customersRouters = Router();
const customersController = new CustomersController();

customersRouters.post('/', customersController.create);

export default customersRouters;
