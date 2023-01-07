/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/common/layout";
import { ProductInterface } from "../interfaces/product";
import ProductApi from "../api/managers/product";
import CategoryButton from "./common/CategoryButton";

const HomePage = () => {
  const router = useRouter();
  const [state, setState] = useState<ProductInterface[] | []>([]);
  useEffect(() => {
    ProductApi.getProductData().then((data) => {
      setState(data[0]?.data);
    });
  }, []);
  const [category, setCategory] = useState("");
  const onCategoryClick = (value: string) => {
    const payload = value === category ? "" : value;
    setCategory(payload);
    ProductApi.getProductByCategory(payload).then((data) => {
      setState(data[0]?.data);
    });
  };
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-6">
          <div className="flex justify-between mx-auto max-w-full px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Product List
            </h1>
          </div>
          <div className="flex gap-8 justify-center mx-auto max-w-full px-4 sm:px-6 md:px-8">
            {["t-shirt", "case", "bags"].map((item) => (
              <CategoryButton
                key={item}
                name={item}
                value={category}
                onClick={(name) => onCategoryClick(name)}
              />
            ))}
          </div>
          <div className="mx-auto  max-w-full px-4 sm:px-6 md:px-8">
            <div>
              <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Products</h2>

                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                      <div className="mt-6  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {state.length !== 0 &&
                          state.map((product) => (
                            <div
                              key={product.id}
                              onClick={() =>
                                router.push(`/product-detail/${product.id}`)
                              }
                              className="group relative border border-gray-200 p-4 sm:p-6 cursor-pointer"
                            >
                              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <img
                                  src={product.image}
                                  alt={"Product Image"}
                                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                              </div>
                              <div className="mt-4 flex justify-between">
                                <div>
                                  <h3 className="text-sm text-gray-700">
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    />
                                    {product.title}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    {product.description}
                                  </p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  ${product.price}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default HomePage;
