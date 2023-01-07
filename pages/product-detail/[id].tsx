import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import { useRouter } from "next/router";
import ProductApi from "../../api/managers/product";
import { ProductInterface } from "../../interfaces/product";

const EditContact = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    ProductApi.getProductById(id).then((data) => {
      setProduct(data[0]?.data);
      setLoader(false);
    });
  }, [id]);
  return (
    <Layout>
      {!loader ? (
        product ? (
          <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
              <nav
                aria-label="Breadcrumb"
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <span className="font-medium text-gray-500 hover:text-gray-600">
                  {product.title}
                </span>
              </nav>
              <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex justify-between">
                      <h1 className="text-xl font-medium text-gray-900">
                        {product.title}
                      </h1>
                      <p className="text-xl font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                      <img
                        src={product.image}
                        className="lg:col-span-2 lg:row-span-2"
                      />
                    </div>
                  </div>

                  <div className="mt-8 lg:col-span-5">
                    <button
                      disabled={product.availibility === "sold"}
                      type="submit"
                      className={`mt-8 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-white ${
                        product.availibility === "available"
                          ? "bg-indigo-600  hover:bg-indigo-700 focus:ring-indigo-500"
                          : "bg-red-600"
                      }`}
                    >
                      {product.availibility === "available"
                        ? "Add to cart"
                        : "Sold Out"}
                    </button>

                    <div className="mt-10 capitalize">
                      <h2 className="text-sm font-medium text-gray-900">
                        Category
                      </h2>

                      <div className="prose prose-sm mt-4 text-gray-500" />
                      {product.category}
                    </div>
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">
                        Description
                      </h2>

                      <div className="prose prose-sm mt-4 text-gray-500" />
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No Data</div>
        )
      ) : (
        <div> loading</div>
      )}
    </Layout>
  );
};
export default EditContact;
