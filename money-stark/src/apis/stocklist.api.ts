import axios from "axios";

export type GetStockListPayload = {
  limit: number;
  amount: number;
};

const API_KEY = "AIzaSyCLe7-NInHtNosw9CCpRQXi8Tq7JZF1KuY";
const CLIENT_ID =
  "752904891533-3gc4fbq8m24gss692h0l2i105kul9jil.apps.googleusercontent.com";

export const StockListApi = {
  BASE_URL: "https://api.stocklist.com",

  getStockList: async (payload: GetStockListPayload) => {
    const response = await axios.get(`${StockListApi.BASE_URL}/stocklist`, {
      params: payload,
    });

    return response.data;
  },
};

export const fetchCurrentStockPrice = async (symbols: string) => {
  const SPREADSHEET_ID = "1fQLzVcx59u6-wG7AZAG7hWR4WKgSPz44qWVcPPsflG0";
  // const RANGE = "Sheet1!A1:S25";
  const SHEET_ID = "1601348625#gid=1601348625";
  // const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_ID}?key=${API_KEY}`;
  const url = "dummy";
  try {
    const response = await axios.get(url);
    return response.data.values;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
