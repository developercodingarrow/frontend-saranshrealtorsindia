import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import FillterContextAppiProvide from "../ContextApi/FillterContext";
import UserDashBoardContextApi from "../ContextApi/UserDashBoardContextApi";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextApiProvider>
        <UserDashBoardContextApi>
          <FillterContextAppiProvide>
            <Component {...pageProps} />;
          </FillterContextAppiProvide>
        </UserDashBoardContextApi>
      </AuthContextApiProvider>
    </>
  );
}
