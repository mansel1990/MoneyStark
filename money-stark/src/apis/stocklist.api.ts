import axios from "axios";

export type GetStockListPayload = {
  limit: number;
  amount: number;
};

export const StockListApi = {
  BASE_URL: "https://api.stocklist.com",

  getStockList: async (payload: GetStockListPayload) => {
    const response = await axios.get(`${StockListApi.BASE_URL}/stocklist`, {
      params: payload,
    });

    return response.data;
  },
};
