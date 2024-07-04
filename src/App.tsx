import { BrowserRouter, Route, Routes } from "react-router-dom";
import JWTDemo from "./components/JWTDemo";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <JWTDemo /> */}
      {/* <NavBar/>
    <Profile />
    <Login />
    <Logout /> */}
    </>
  );
}

export default App;
