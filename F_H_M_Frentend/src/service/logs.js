import axios from "../config/Axios";
import { useQuery } from "react-query";

const fetchLogs = async ({
  page,
  limit,
  userId,
  startDate,
  endDate,
  query,
}) => {
  const response = await axios.get("/logs", {
    params: { page, limit, userId, startDate, endDate, query },
  });
  return response.data;
};

export const useFetchLogs = (params) => {
  return useQuery(["fetchLogs", params], () => fetchLogs(params), {
    refetchOnWindowFocus: true,
    refetchOnReconnect: "always",
    refetchOnMount: true,
    staleTime: 0,
  });
};
