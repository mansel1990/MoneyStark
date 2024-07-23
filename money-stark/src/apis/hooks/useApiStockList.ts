import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchCurrentStockPrice,
  GetStockListPayload,
  saveStockTransaction,
  StockListApi,
} from "../stocklist.api";

export const CACHE_KEY = {
  getList: (params?: GetStockListPayload) => ["stocklist", params],
  getAllStocks: ["allstocks"],
};

export const useApiStockList = (params: GetStockListPayload) => {
  return useQuery({
    queryKey: CACHE_KEY.getList(params),
    queryFn: async () => await StockListApi.getStockList(params),
  });
};

export const useGetLatestStockPrice = () => {
  return useQuery({
    queryKey: CACHE_KEY.getAllStocks,
    queryFn: async () => await fetchCurrentStockPrice(),
  });
};

export type saveStockTransactionPayload = {
  date: string;
  stockSymbol: string;
  quantity: number;
  price: number;
};

export const useSaveStockTransaction = () => {
  return useMutation({
    mutationFn: (data: saveStockTransactionPayload) =>
      saveStockTransaction(data),
  });
};
