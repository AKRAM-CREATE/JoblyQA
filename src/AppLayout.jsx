import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import FullPageSpinner from "./components/FullPageSpinner";
import { useUser } from "./hooks/useUser";

function AppLayout() {
  const user = useUser();

  return (
    <div>
      <Header className={!user?.aud ? "sticky top-0 z-50" : ""} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
