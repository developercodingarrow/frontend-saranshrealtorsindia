import AppContextAppiProvide from "../ContextApi/AppContextApi";
import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import BlogContextApiProvider from "../ContextApi/BlogContextApi";
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
              <BlogContextApiProvider>
                <AppContextAppiProvide>
                  <Component {...pageProps} />;
                </AppContextAppiProvide>
              </BlogContextApiProvider>
            </ProjectContextApiProvider>
          </FillterContextAppiProvide>
        </UserDashBoardContextApi>
      </AuthContextApiProvider>
    </>
  );
}
