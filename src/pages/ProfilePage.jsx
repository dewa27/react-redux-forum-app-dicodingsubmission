import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const {
    authUser,
  } = useSelector((states) => states);
  return (
    <>
      <h2 className="section-title">
        Your Account
      </h2>
      <div className="profile-user">
        <img className="user-image" src={authUser.avatar} alt="" />
        <h3>{authUser.name}</h3>
        <p>{authUser.email}</p>
      </div>
    </>
  );
}

export default ProfilePage;
