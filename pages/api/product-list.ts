import type { NextApiRequest, NextApiResponse } from "next";
import { ProductInterface } from "../../interfaces/product";
import { productList } from "./productData";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: ProductInterface[] }>
) {
  res.status(200).json({
    data: productList,
  });
}
