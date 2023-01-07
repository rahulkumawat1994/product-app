import { get, post } from "..";

class ProductApi {
  static getProductData() {
    const url = "/product-list";
    return get(url);
  }
  static getProductByCategory(value: string) {
    const url = "/productByCategory";
    return post(url, { value: value });
  }
  static getProductById(id: string) {
    const url = "/productById";
    return post(url, { id: id });
  }
}
export default ProductApi;
