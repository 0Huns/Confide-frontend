import { useMutation, useQueryClient } from "@tanstack/react-query";
import usersApi from "../services/usersApi";
import { useDispatch } from "react-redux";
import { setShouldFetch } from "../store/module/fetchModule";

const fetchUserNewPost = async ({ title, content }) => {
  try {
    return await usersApi.post(
      "/newPost",
      {
        title: title,
        content: content,
      },
      { "Content-Type": "application/json", withCredentials: true }
    );
  } catch (err) {
    throw new Error("Failed to post data");
  }
};

export const useUserNewPost = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUserNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      dispatch(setShouldFetch(true));
    },
  });
};
