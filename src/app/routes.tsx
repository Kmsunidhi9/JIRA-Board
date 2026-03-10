import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./components/Dashboard";
import { Projects } from "./components/Projects";
import { Board } from "./components/Board";
import { Backlog } from "./components/Backlog";
import { Reports } from "./components/Reports";
import { Issues } from "./components/Issues";
import { IssueDetail } from "./components/IssueDetail";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { ForgotPassword } from "./components/ForgetPassword";



export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/",
    element: <ProtectedRoute ><RootLayout /></ProtectedRoute>,
    children: [
      { index: true, path: "dashboard", Component: Dashboard },
      { path: "projects", Component: Projects},
      { path: "board", Component: Board },
      { path: "backlog", Component: Backlog },
      { path: "reports", Component: Reports },
      { path: "issues", Component: Issues },
      { path: "issues/:id", Component: IssueDetail },
      { path: "settings", Component: Settings },
    ],
  },
]);
