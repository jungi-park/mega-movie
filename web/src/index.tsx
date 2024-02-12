import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./modules/rootReducer";
import { createStore } from "redux";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import OauthSignIn from "./pages/OauthSignIn";
import MyPage from "./pages/MyPage";
import Ticketing from "./pages/Ticketing";
import Movie from "./pages/Movie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header className="dark"></Header>
      <Routes>
        <Route path="/*" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/mypage" element={<MyPage></MyPage>}></Route>
        <Route path="/movie" element={<Movie></Movie>}></Route>
        <Route
          path="/oauth/signin"
          element={<OauthSignIn></OauthSignIn>}
        ></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
