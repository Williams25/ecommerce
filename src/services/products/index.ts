import { http } from "services/axios_config";
import { Products } from "types/Products";
import { Coupon } from "types/Coupon";

export const productService = {
  getAll: () => {
    return http.get<Products[]>(`/products`);
  },
  getAllCoupons: () => {
    return http.get<Coupon[]>(`/coupon`);
  }
};
