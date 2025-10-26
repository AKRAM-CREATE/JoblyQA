import { useMutation } from "@tanstack/react-query";
import { RegisterApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useRegister = () => {
  const navigate = useNavigate();

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ firstName, lastName, email, password }) =>
      RegisterApi({ firstName, lastName, email, password }),
    onSuccess: () => {
      toast.success("Registered Successfully");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong!");
    },
  });

  return { register, isLoading, error };
};
