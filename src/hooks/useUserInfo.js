import { useQuery } from "@tanstack/react-query";
import usersApi from "../services/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setShouldFetch } from "../store/module/fetchModule";

export const useUserInfo = () => {
  const dispatch = useDispatch();
  const storedData = localStorage.getItem("myPost");
  const shouldFetch = useSelector((state) => state.fetch.shouldFetch);

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await usersApi.get("/profile");
      localStorage.setItem(
        "myPost",
        JSON.stringify({
          mypost: response.data,
        })
      );
      dispatch(setShouldFetch(true));
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
    data: storedData?.mypost || data,
    isLoading: isLoading && !storedData,
    isError,
    isFetching,
  };
};
