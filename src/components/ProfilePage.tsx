import React from "react";
import NavBar from "./NavBar";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (!user) {
    return <div>No user profile found</div>;
  }

  if (!isAuthenticated) {
    <div>User not authenticated</div>;
  }

  //prints our token
  getAccessTokenSilently().then((token) => console.log(token));

  return (
    <>
      <NavBar />
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </>
  );
};

export default ProfilePage;
