import { http } from "services/axios_config";
import { Products } from "types/Products";

export const productService = {
  getAll: () => {
    return http.get<Products[]>(`/products`);
  },
};
