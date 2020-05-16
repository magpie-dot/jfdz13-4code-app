import React from "react";
import styles from "./UserPanel.module.css";

class UserAvatar extends React.Component {

  render() {
    const { image, id, activeAvatarId } = this.props;
    return (
      <>
        <img
          alt="avatar"
          onClick={(event) => this.props.handleOnImageClick(event, id)}
          src={image}
          className={
            id === activeAvatarId ? styles.avatarsActive : styles.avatars
          }
        />
      </>
    );
  }
}
export default UserAvatar;
