import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import StorePage from "@/pages/public/StorePage";
import LoginPage from "./pages/admin/LoginPage";
import NotFound from "@/shared/pages/NotFound";
const router = createBrowserRouter([
	{
		path: "/",
		element: <StorePage />,
	},
	{
		path: "/store",
		element: <Navigate to="/" replace/>,
	},
	{
		path: "/admin/login",
		element: <LoginPage />,
	},
	{path: "*",
		element: <NotFound />,
	},
]);
const App = () => {

	return (
		<RouterProvider router={router} />
	);
};

export default App;
