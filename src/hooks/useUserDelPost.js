import { useMutation, useQueryClient } from '@tanstack/react-query';
import usersApi from '../services/usersApi';

const fetchUserDelPost = async ({id}) => {
  try{
    return await usersApi.delete(
      `/delPost/${id}`,
      { 'Content-Type': 'application/json', withCredentials: true, });
  }catch(err){
    throw new Error("Failed to delete data");
  }
};

export const useUserDelPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUserDelPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userPosts'] });
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    }
  })
};
