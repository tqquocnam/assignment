import { useRoutes } from "react-router-dom";
import HomePage from "../screens/HomePage";

const Router: React.FC = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return routeElements;
};

export default Router;
