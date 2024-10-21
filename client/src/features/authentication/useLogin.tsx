import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "@/services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (username: string) => {
      queryClient.setQueryData(["USERS"], username);
      navigate("/");
      toast.success(`${username} entered application bitch`);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  return { login, isPending, error };
}
export default useLogin;
