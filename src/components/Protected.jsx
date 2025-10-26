import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Protected({ children }) {
  const user = useUser();
  const navigate = useNavigate();
  if (!user?.aud) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
}

export default Protected;
