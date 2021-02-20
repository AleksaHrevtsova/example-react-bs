import React from "react";

import withAuthContext from "./hoc/withAuthContext";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 12,
  },
};
// import AuthContext from "../contexts/Auth";

// const UserMenu = () => {
//   <AuthContext.Consumer>
//     {({ avatar, name, onLogout }) => {
//       <div style={styles.container}>
//         <img src={avatar} alt={name} width="32" tyle={styles.avatar} />
//         <span style={styles.name}>Hello, {name}</span>
//         <button type="button">Log Out</button>
//       </div>;
//     }}
//   </AuthContext.Consumer>;
// };
// export default UserMenu;

const UserMenu = ({ auth }) => (
  <>
    {auth.user ? (
      <div style={styles.container}>
        <img
          src={auth.user.avatar}
          alt={auth.user.name}
          width="32"
          tyle={styles.avatar}
        />
        <span style={styles.name}>Hello, {auth.user.name}</span>
        <button type="button">Log Out</button>
      </div>
    ) : (
      <button type="button" onClick={auth.onLogin}>
        Log In
      </button>
    )}
  </>
);
export default withAuthContext(UserMenu);
