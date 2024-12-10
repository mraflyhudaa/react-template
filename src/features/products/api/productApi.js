import { useApi } from "@hooks/useApi";
import endpoints from "@api/endpoints";

export const useProducts = () => {
  const { request, loading, error } = useApi();

  const getProducts = async (params) => {
    return request({
      url: endpoints.products.getAll,
      method: "GET",
      params,
    });
  };

  const getProduct = async (id) => {
    return request({
      url: endpoints.products.getById(id),
      method: "GET",
    });
  };

  const createProduct = async (data) => {
    return request({
      url: endpoints.products.create,
      method: "POST",
      data,
    });
  };

  return {
    getProducts,
    getProduct,
    createProduct,
    loading,
    error,
  };
};
