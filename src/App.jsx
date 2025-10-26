import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "./AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { JobProvider } from "./components/JobProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToastProvider from "./components/ToastProvider";
import MyJobs from "./pages/MyJobs";
import SavedJobDetail from "./pages/SavedJob";
import SavedJob from "./pages/SavedJob";
import { StorageSync } from "./components/StorageSync";
import AppWrapper from "./components/Appwrapper";
import Protected from "./components/Protected";

const queryClient = new QueryClient();

function App() {
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <ToastProvider />
        <JobProvider>
          <BrowserRouter>
            <StorageSync />
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route
                  path="/myjobs"
                  element={
                    <Protected>
                      <MyJobs />
                    </Protected>
                  }
                />

                <Route
                  path="/savedjobdetail"
                  element={
                    <Protected>
                      <SavedJob />
                    </Protected>
                  }
                />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </JobProvider>
      </QueryClientProvider>
    </AppWrapper>
  );
}

export default App;
