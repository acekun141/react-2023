import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { Fragment } from "react";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Landing /> }];
  const element = useRoutes([...commonRoutes]);

  return (
    <Fragment>
      {element}
    </Fragment>
  );
};