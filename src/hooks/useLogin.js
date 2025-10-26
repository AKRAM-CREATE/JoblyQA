import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      toast.success("Login Successfully");
      queryClient.setQueryData(["user"], data.user);

      navigate("/");
    },
    onError: (err) => {
      toast.error(`${err.message}`);
    },
  });

  return { login, isLoading };
}
