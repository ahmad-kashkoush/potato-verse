import AppLayout from "@/components/AppLayout";
import AddGame from "@/pages/AddGame";
import Game from "@/pages/Game";
import Games from "@/pages/Games";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProfilePage from "@/pages/Profile";
import Signup from "@/pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    // route wrapper
    element: <AppLayout />,
    // add outlets
    children: [
      // main page
      { index: true, path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/games", element: <Games /> },
      { path: "/games/game/:id", element: <Game /> },
      { path: "/games/add-game", element: <AddGame /> },
    ],
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
