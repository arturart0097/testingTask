import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../../../App";
import { Loader } from "../../../../widgets/Loader";
import NotFoundPage from "../../../../pages/NotFoundPage";

const InfoUserPage = lazy(() => import("../../../../pages/InfoUserPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/user/:id",
    element: (
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <InfoUserPage />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
  },
]);

export default router;
