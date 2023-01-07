import type { NextApiRequest, NextApiResponse } from "next";
import { ProductInterface } from "../../interfaces/product";
import { productList } from "./productData";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: ProductInterface }>
) {
  const filter = productList.filter(({ id }) => req.body.id === id);
  res.status(200).json({
    data: filter[0],
  });
}
