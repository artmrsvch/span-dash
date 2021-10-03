import React from "react";

interface ProfileProps {
  title: string;
  signature: string;
}

const Profile: React.FC<ProfileProps> = ({ title, signature }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{signature}</div>
    </div>
  );
};

export default Profile;
