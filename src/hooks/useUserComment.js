import { useMutation, useQueryClient } from '@tanstack/react-query';
import usersApi from '../services/usersApi';

const fetchUserComment = async ({ id, comment }) => {
  try{
    return await usersApi.post(
      '/comment',
      {
        postId : id,
        comment : comment
      },
      { 'Content-Type': 'application/json', withCredentials: true, });
  }catch(err){
    throw new Error("Failed to post data");
  }
};

export const useUserComment = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUserComment,
    onSuccess: () => {
      //변경된 id post만 무효화
      queryClient.invalidateQueries({ queryKey: ['userPostById',id] });
    }
  })
};
