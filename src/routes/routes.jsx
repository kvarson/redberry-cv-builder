// import Personal from "./components/personal-info-page/Personal";
import Starting from "../components/starting-page/Starting";
import Personal from "../components/personal-info-page/Personal";
import ExperienceRemastered from "../components/experienceRemastered/ExperienceRemastered";
import Education from "../components/education/Education";
import ResumeFinished from "../components/reumeFinished/ResumeFinished";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Starting />,
      },
      {
        path: "/personal",
        element: <Personal />,
      },
      {
        path: "/experience",
        element: <ExperienceRemastered />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/resume",
        element: <ResumeFinished />,
      },
    ],
  },
]);
