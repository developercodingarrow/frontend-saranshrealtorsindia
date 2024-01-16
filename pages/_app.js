import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import FillterContextAppiProvide from "../ContextApi/FillterContext";
import ProjectContextApiProvider from "../ContextApi/ProjectContextApi";
import UserDashBoardContextApi from "../ContextApi/UserDashBoardContextApi";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextApiProvider>
        <UserDashBoardContextApi>
          <FillterContextAppiProvide>
            <ProjectContextApiProvider>
              <Component {...pageProps} />;
            </ProjectContextApiProvider>
          </FillterContextAppiProvide>
        </UserDashBoardContextApi>
      </AuthContextApiProvider>
    </>
  );
}
