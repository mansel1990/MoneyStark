import axios from "axios";
import { allStocks } from "../sampledata/StockData";
import createAuthenticatedAxiosInstance from "./axiosInterceptor";

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

export const saveStockTransaction = async (transactionData: any) => {
  const axiosInstance = createAuthenticatedAxiosInstance();
  try {
    const response = await axiosInstance.post(
      "http://192.168.0.183:8181/save_stock_transaction",
      transactionData
    );
    return response.data;
  } catch (error) {
    console.error("Error saving stock transaction:", error);
    throw error;
  }
};

export const fetchCurrentStockPrice = async () => {
  const data = allStocks;
  return data;
  // const url = "http://192.168.0.183:8181/fetch_recent_data";
  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching stock data:", error);
  //   throw error;
  // }
};
