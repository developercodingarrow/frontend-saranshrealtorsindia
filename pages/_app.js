import AppContextAppiProvide from "../ContextApi/AppContextApi";
import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import BlogContextApiProvider from "../ContextApi/BlogContextApi";
import BuilderContextAppiProvide from "../ContextApi/BuilderContextApi";
import CityContextAppiProvide from "../ContextApi/CityContextApi";
import FillterContextAppiProvide from "../ContextApi/FillterContext";
import ProjectContextApiProvider from "../ContextApi/ProjectContextApi";
import UserDashBoardContextApi from "../ContextApi/UserDashBoardContextApi";
import AdminContextApiProvider from "../ContextApi/adminContextApi";
import EnquireyContextAppiProvide from "../ContextApi/enquireyContectApi";
import ListingContextAppiProvide from "../ContextApi/userinterface/ListingContextApi";
import UIBlogContextApiProvider from "../ContextApi/userinterface/UiBlogContectApi";
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
                  <CityContextAppiProvide>
                    <BuilderContextAppiProvide>
                      <ListingContextAppiProvide>
                        <UIBlogContextApiProvider>
                          <EnquireyContextAppiProvide>
                            <AdminContextApiProvider>
                              <Component {...pageProps} />;
                            </AdminContextApiProvider>
                          </EnquireyContextAppiProvide>
                        </UIBlogContextApiProvider>
                      </ListingContextAppiProvide>
                    </BuilderContextAppiProvide>
                  </CityContextAppiProvide>
                </AppContextAppiProvide>
              </BlogContextApiProvider>
            </ProjectContextApiProvider>
          </FillterContextAppiProvide>
        </UserDashBoardContextApi>
      </AuthContextApiProvider>
    </>
  );
}
