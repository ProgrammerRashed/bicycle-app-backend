import express from 'express';
import { productController } from './product.controller';
import validationRequest from '../../middlewares/validateRequest';
import { productValidationSchema } from './product.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/product',
  auth('admin'),
  validationRequest(productValidationSchema.CreateProductValidationSchema),
  productController.createProduct,
);

router.get('/products', productController.getallproduct);
router.get('/products/brands', productController.getproductsbrands);
router.get('/product/:id', productController.getSingleProduct);

router.put(
  '/product/:productId',
  auth('admin'),
  validationRequest(productValidationSchema.UpdateProductValidationSchema),
  productController.updateProduct,
);

router.delete(
  '/product/:productId',
  auth('admin'),
  productController.DeleteProduct,
);

export const porductRouter = router;
