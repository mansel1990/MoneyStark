import { useQuery } from "@tanstack/react-query";
import { GetStockListPayload, StockListApi } from "../stocklist.api";

export const CACHE_KEY = {
  getList: (params?: GetStockListPayload) => ["stocklist", params],
};

export const useApiStockList = (params: GetStockListPayload) => {
  return useQuery({
    queryKey: CACHE_KEY.getList(params),
    queryFn: async () => await StockListApi.getStockList(params),
  });
};
