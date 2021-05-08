import React from "react";
import "./index.css";
import Image from "src/components/Image";
import avatar from "src/assets/avatar/sky.png";
import { storage } from "src/utils/storage";

const Settings: React.FC = () => {
  const user = storage("user");
  console.log(user);

  return (
    <div className="flex-center flex-column">
      <Image src={avatar} size={140} />
    </div>
  );
};

export default Settings;
