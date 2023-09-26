import { useRoutes } from "react-router-dom";
import HomePage from "../screens/UserScreen";
import Layouts from "../screens/Layout";

const Router: React.FC = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Layouts />,
    },
  ]);

  return routeElements;
};

export default Router;
