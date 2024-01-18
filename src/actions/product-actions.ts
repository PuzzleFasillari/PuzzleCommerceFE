'use server';

import { ProductService } from '@service/product-service';

export const addProductAction = async (formData: FormData) => {
  try {
    await ProductService.createProduct(formData);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
