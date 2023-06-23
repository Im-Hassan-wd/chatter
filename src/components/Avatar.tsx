import "./Avatar.css";

// props type
import { AvatarProps } from "../types/Types";

function Avatar({ src }: any) {
  return (
    <div className="avatar">
      <img src={src} alt="user avatar" />
    </div>
  );
}

export default Avatar;
