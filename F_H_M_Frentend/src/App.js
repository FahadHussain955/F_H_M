// Importing necessary modules
import "./main.css";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import routes from "./router";
import { ConfigProvider } from "antd";
import { Provider, useDispatch, useSelector } from "react-redux";
import { persistor, store } from "./store/store";
import { ToggleProvider } from "./context/provider";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { ADMIN_TYPE, SUPER_ADMIN_TYPE, getUserId } from "./constants";
import { getUser } from "./store/user/userSlice";
import Page404 from "./pages/no-data-found";
import { SideBar } from "./components/SideBar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ToggleProvider>
            <ConfigProvider
              theme={{ token: { fontFamily: "'Roboto', 'sans-serif'" } }}
            >
              <AppRoutes />
            </ConfigProvider>
          </ToggleProvider>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

const AppRoutes = () => {
  const dispatch = useDispatch();
  const usr = useSelector((state) => state?.user?.user);

  const getRoutes = (route) => {
    const userPermissions = usr?.permissions;
    if (route.isPublic) {
      return <route.pages />;
    }

    if (usr?.roles == "admin") {
      return <ProtectedRoute component={route.pages} />;
    }

    if (route.isSuperAdminOnly && usr?.roles !== SUPER_ADMIN_TYPE) {
      return <Page404 component={route.pages} />;
    }

    if (route.requiredPermission) {
      const hasPermission = userPermissions?.some(
        (p) => p.permissionKey === route.requiredPermission
      );
      if (hasPermission) {
        return <ProtectedRoute component={route.pages} />;
      } else {
        return <Page404 component={route.pages} />;
      }
    }
    return <ProtectedRoute component={route.pages} />;
  };

  useEffect(() => {
    const userId = getUserId();
    dispatch(getUser(userId));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={getRoutes(route)}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
