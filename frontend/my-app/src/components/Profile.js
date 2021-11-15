import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

export const Prfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        
        <h8>{user.name}</h8>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};