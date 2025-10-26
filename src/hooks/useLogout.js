import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      localStorage.removeItem("supabase.auth.token");

      queryClient.invalidateQueries(["user"]);
      navigate("/", { replace: true });
    },
    onError: () => {},
  });

  return { logout, isLoading };
}
