import { useQuery } from "@tanstack/react-query";
import usersApi from "../services/usersApi";

export const useUserInfo = () => {
  const storedData = localStorage.getItem("myPost");
  const parsedData = storedData ? JSON.parse(storedData) : null;
  const shouldFetch = parsedData?.fetch;

  const fetchEnabled = false;

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await usersApi.get("/profile");
      localStorage.setItem(
        "myPost",
        JSON.stringify({
          mypost: response.data,
          fetch: fetchEnabled,
        })
      );
      return response.data;
    },
    enabled: shouldFetch,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: 100000,
  });

  // localStorage에 저장된 데이터가 있으면 반환, 없으면 API 데이터 반환
  return {
    data: parsedData?.mypost || data,
    isLoading: isLoading && !parsedData,
    isError,
    isFetching,
  };
};
