import { useState, useEffect } from "react";
import usersApi from "../services/usersApi"; // 기존 API 모듈 사용

export const useUserInfo = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await usersApi.get("/profile"); // API 호출
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { data, isLoading, isError };
};
