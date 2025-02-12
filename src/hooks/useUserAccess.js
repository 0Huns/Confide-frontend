import { useQuery } from '@tanstack/react-query';
import usersApi from '../services/usersApi';

const fetchUserAccess = async () => {
  const response = await usersApi.get('/access');
  return response.data;
};

export const useUserAccess = () => {
  return useQuery({
    queryKey: ['userAccess'],
    queryFn: fetchUserAccess,
    retry: 1, // 실패한 요청을 재시도하는 횟수 설정
    refetchOnWindowFocus: true, // 윈도우 포커스 시 다시 요청
    refetchOnReconnect: true, // 네트워크 재연결 시 다시 요청
    staleTime: 100000,
  })
};
